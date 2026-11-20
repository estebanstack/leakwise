"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CheckCircle } from "@/components/icons";

type EmailCaptureProps = {
  /** Visible on the button. */
  buttonLabel?: string;
  /** Prefix for ids; combined with a unique suffix so several instances can coexist. */
  idPrefix?: string;
  className?: string;
  /** Stable id for the input (overrides the generated one). */
  inputId?: string;
  /** When a link to this hash is clicked (or the page loads on it), focus the input. */
  focusOnHash?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCapture({
  buttonLabel = "Find my subscriptions",
  idPrefix = "email",
  className,
  inputId: inputIdProp,
  focusOnHash,
}: EmailCaptureProps) {
  const uid = useId();
  const inputId = inputIdProp ?? `${idPrefix}-${uid}`;
  const errorId = `${inputId}-error`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!focusOnHash) return;
    const focus = () => inputRef.current?.focus({ preventScroll: true });
    if (window.location.hash === focusOnHash) focus();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (a?.getAttribute("href") === focusOnHash) setTimeout(focus, 50);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [focusOnHash]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value.trim() ?? "";
    if (!value) {
      setError("Enter your email address.");
      inputRef.current?.focus();
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setError("That email doesn't look right.");
      inputRef.current?.focus();
      return;
    }
    setError(null);
    setDone(true);
  }

  return (
    <div className={className}>
      {!done && (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              ref={inputRef}
              id={inputId}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@email.com"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              onChange={() => error && setError(null)}
              className={`w-full rounded-xl border bg-surface px-4 py-3.5 text-text placeholder:text-muted ${
                error ? "border-danger" : "border-hairline"
              }`}
            />
          </div>
          <button
            type="submit"
            className="whitespace-nowrap rounded-xl bg-amber px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-amber/90"
          >
            {buttonLabel}
          </button>
        </form>
      )}
      {error && !done && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
      <div aria-live="polite">
        {done && (
          <p className="flex items-start gap-3 rounded-xl border border-hairline bg-surface px-4 py-3.5 text-text">
            <CheckCircle className="mt-0.5 shrink-0 text-xl text-mint" />
            <span>You&apos;re in. Check your inbox to connect your first card.</span>
          </p>
        )}
      </div>
    </div>
  );
}
