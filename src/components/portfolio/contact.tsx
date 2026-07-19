"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-input-bg px-4 py-2.5 text-sm text-fg-primary outline-none transition-colors duration-200 placeholder:text-input-placeholder focus:border-input-border-focus ${
    hasError ? "border-red-400" : "border-input-border"
  }`;
}

export function Contact() {
  const [state, action, pending] = useActionState<ContactState | undefined, FormData>(
    submitContact,
    undefined,
  );
  const success = state?.ok === true;
  const fieldErrors = state?.fieldErrors;

  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Get In Touch</span>
          <h2 className="mt-2 section-heading">Contact Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-base leading-relaxed text-fg-secondary prose"
        >
          Have a project, opportunity, or just want to say hi? Send me a message — I read everything.
        </motion.p>

        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="success-toast"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-success-icon/10"
            >
              <CheckCircle className="h-8 w-8 text-success-icon" />
            </motion.span>
            <div>
              <p className="text-lg font-semibold text-success-text">Message sent successfully!</p>
              <p className="mt-2 text-sm leading-relaxed text-success-text-secondary">
                Thank you for reaching out. A confirmation email is on its way to your inbox, and I&apos;ll get back to you within 24&ndash;48 hours.
              </p>
            </div>
          </motion.div>
        )}

        {!success && (
          <motion.form
            key="form"
            action={action}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 space-y-5"
            noValidate
          >
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg-primary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                aria-invalid={fieldErrors?.name ? true : undefined}
                className={inputClass(!!fieldErrors?.name)}
                placeholder="Your name"
              />
              {fieldErrors?.name && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg-primary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                aria-invalid={fieldErrors?.email ? true : undefined}
                className={inputClass(!!fieldErrors?.email)}
                placeholder="your@email.com"
              />
              {fieldErrors?.email && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-fg-primary">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={200}
                aria-invalid={fieldErrors?.subject ? true : undefined}
                className={inputClass(!!fieldErrors?.subject)}
                placeholder="What is this about?"
              />
              {fieldErrors?.subject && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg-primary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                maxLength={5000}
                rows={5}
                aria-invalid={fieldErrors?.message ? true : undefined}
                className={`${inputClass(!!fieldErrors?.message)} resize-y`}
                placeholder="Tell me about your project, opportunity, or anything else..."
              />
              {fieldErrors?.message && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.message}</p>
              )}
            </div>

            {state && "error" in state && state.error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="error-toast"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-error-icon" />
                <p className="text-sm text-error-text-secondary">{state.error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="btn-primary"
            >
              {pending && <Loader2 className="h-4 w-4 animate-spin" />}
              {pending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-wrap gap-6 border-t border-border pt-8"
        >
          <a
            href="mailto:puhansiddharth@gmail.com"
            className="link-underline flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-accent-hover"
          >
            <Mail className="h-4 w-4 transition-transform duration-200 group-hover:rotate-4" />
            puhansiddharth@gmail.com
          </a>
          <a
            href="https://github.com/siddpuhan"
            target="_blank"
            rel="noreferrer"
            className="link-underline flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-accent-hover"
          >
            <GithubIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-4" />
            GitHub
          </a>
          <a
            href="https://x.com/SPuhan80780"
            target="_blank"
            rel="noreferrer"
            className="link-underline flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-accent-hover"
          >
            <TwitterIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-4" />
            X / Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
