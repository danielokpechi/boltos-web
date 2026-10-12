'use client';
// Contact + newsletter fallback forms: no backend yet, so a valid submit opens
// the visitor's email app with the form fields as the message body.
// <FormNote /> (anywhere inside the form) shows the status line.
import { createContext, useContext, useState, type FormEvent, type ReactNode } from 'react';

const NoteContext = createContext('');

export function MailtoForm({ to, subject, missingNote, className, children }: {
  to: string; subject: string; missingNote: string; className?: string; children: ReactNode;
}) {
  const [note, setNote] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!to) { setNote(missingNote); return; }
    const lines: string[] = [];
    for (const [k, v] of new FormData(form).entries()) if (String(v).trim()) lines.push(`${k}: ${v}`);
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    setNote('Opening your email app…');
  };
  return (
    <NoteContext.Provider value={note}>
      <form className={className} onSubmit={onSubmit}>{children}</form>
    </NoteContext.Provider>
  );
}

export function FormNote({ className }: { className?: string }) {
  const note = useContext(NoteContext);
  return <span className={className} role="status" aria-live="polite">{note}</span>;
}
