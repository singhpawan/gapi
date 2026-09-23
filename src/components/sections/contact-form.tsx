"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-in rounded-[var(--radius)] border border-line bg-surface p-8">
        <p className="text-lg font-semibold text-ink">Message sent</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out. We typically respond within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-4">
        <Field label="Subject" name="subject" required />
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-line bg-void px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-rausch/60"
        />
      </div>
      <button
        type="submit"
        className="mt-6 h-12 rounded-full bg-rausch px-6 text-sm font-semibold text-white transition hover:bg-rausch-dark"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-full border border-line bg-void px-4 text-sm text-ink outline-none transition focus:border-rausch/60"
      />
    </div>
  );
}
