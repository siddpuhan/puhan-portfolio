export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string>
>;

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(raw: Partial<Record<string, unknown>>): {
  values?: ContactValues;
  fieldErrors: ContactFieldErrors;
} {
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  const fieldErrors: ContactFieldErrors = {};

  if (!name) {
    fieldErrors.name = "Please enter your name.";
  } else if (name.length > 100) {
    fieldErrors.name = "Name must be 100 characters or fewer.";
  } else if (!/^[\p{L}0-9 .,'-]+$/u.test(name)) {
    fieldErrors.name = "Name contains invalid characters.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (email.length > 200) {
    fieldErrors.email = "Email is too long.";
  } else if (!EMAIL_RE.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    fieldErrors.subject = "Please enter a subject.";
  } else if (subject.length > 200) {
    fieldErrors.subject = "Subject must be 200 characters or fewer.";
  }

  if (!message) {
    fieldErrors.message = "Please enter a message.";
  } else if (message.length < 20) {
    fieldErrors.message = "Message should be at least 20 characters.";
  } else if (message.length > 5000) {
    fieldErrors.message = "Message must be 5000 characters or fewer.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  return { values: { name, email, subject, message }, fieldErrors };
}
