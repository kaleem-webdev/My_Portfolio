"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, CircleAlert, Send } from "lucide-react";
import { contact } from "@/data/site";

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" } // delivered through a configured endpoint
  | { kind: "draft" } // email app opened, nothing sent yet
  | { kind: "error"; message: string };

const empty: Values = { name: "", email: "", subject: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (v.message.trim().length < 10)
    e.message = "Your message should be at least 10 characters.";
  return e;
}

const field =
  "w-full rounded-2xl border bg-background px-4 py-3.5 text-base outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent-soft";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set =
    (k: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ kind: "idle" });
      const first = Object.keys(found)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    // Option A: a real form endpoint has been configured in src/data/site.ts
    if (contact.formEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus({ kind: "sent" });
        setValues(empty);
      } catch {
        setStatus({
          kind: "error",
          message: `Your message couldn't be sent. Please try again or email ${contact.email} directly.`,
        });
      }
      return;
    }

    // Option B (default): no backend yet, so hand the message to the visitor's
    // email app. Nothing is sent until they press send there.
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "draft" });
  }

  const err = (k: keyof Values) => (errors[k] ? `cf-${k}-err` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={err("name")}
            placeholder="Your name"
            className={`${field} ${errors.name ? "border-red-600" : "border-line"}`}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={err("email")}
            placeholder="you@example.com"
            className={`${field} ${errors.email ? "border-red-600" : "border-line"}`}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          value={values.subject}
          onChange={set("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={err("subject")}
          placeholder="What's this about?"
          className={`${field} ${errors.subject ? "border-red-600" : "border-line"}`}
        />
        {errors.subject && (
          <p id="cf-subject-err" className="mt-2 text-sm text-red-700">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={err("message")}
          placeholder="Tell me about your project..."
          className={`${field} resize-y ${errors.message ? "border-red-600" : "border-line"}`}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-medium text-white transition hover:bg-accent disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message"}
        <Send
          size={16}
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <div aria-live="polite" role="status">
        {status.kind === "sent" && (
          <p className="flex items-start gap-3 rounded-2xl border border-green-700/30 bg-green-50 p-4 text-green-900">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden />
            Thanks, your message has been sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status.kind === "draft" && (
          <p className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft p-4 text-foreground">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <span>
              Your email app should have opened with your message ready to go.{" "}
              <strong>It hasn&apos;t been sent yet</strong>, so press send there.
              If nothing opened, email me directly at{" "}
              <a className="underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </span>
          </p>
        )}
        {status.kind === "error" && (
          <p className="flex items-start gap-3 rounded-2xl border border-red-700/30 bg-red-50 p-4 text-red-900">
            <CircleAlert size={20} className="mt-0.5 shrink-0" aria-hidden />
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
