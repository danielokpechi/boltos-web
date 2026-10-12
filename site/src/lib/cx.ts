// Class-name helper for CSS Modules that keeps the original (Astro) class names
// in the markup: cn('nav-pill', open && 'open') emits each name's scoped module
// class *and* the plain name. The plain name is what Astro rendered, so rules
// that reach into another component with :global(.name) (e.g. a page sizing a
// LogoSlot's `.logo-real`) and global classes such as `hl` keep working.
type Name = string | false | null | undefined;

export function cx(styles: Record<string, string>) {
  return (...names: Name[]) =>
    names
      .filter(Boolean)
      .flatMap((n) => String(n).split(/\s+/))
      .filter(Boolean)
      .map((n) => (styles[n] ? `${styles[n]} ${n}` : n))
      .join(' ');
}
