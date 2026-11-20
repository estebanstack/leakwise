import { footer } from "@/lib/content";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#" aria-label="Leakwise home" className="w-fit rounded-md">
            <Logo />
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-text"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-hairline pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{footer.disclaimer}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
