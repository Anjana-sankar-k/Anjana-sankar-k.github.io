/**
 * Early-2000s personal-web shell: faux browser chrome, desktop tabs, and pixel-era utility details.
 */
import { ArrowUpRight, Mail, Minus, Square, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const links = [
  ["/work", "work"],
  ["/projects", "projects"],
  ["/sidequests", "sidequests"],
  ["/about", "about me"],
  ["/contact", "contact"],
] as const;

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <div className="portfolio-shell">
      <div className="browser-window">
        <div className="browser-titlebar"><span className="window-app-icon">A</span><span className="browser-title">personal homepage</span><span className="window-controls"><Minus size={12} /><Square size={11} /><X size={12} /></span></div>
        <div className="browser-toolbar"><span className="toolbar-button">←</span><span className="toolbar-button toolbar-disabled">→</span><span className="toolbar-button">↻</span><span className="address-bar"><span className="address-lock">◈</span> http://anjanasankar.com/{location === "/" ? "home" : location.slice(1)}</span><span className="toolbar-button">☆</span></div>
        <header className="site-nav">
          <nav aria-label="Primary navigation">
            {links.map(([href, label]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}
          </nav>
          <a className="nav-contact" href="mailto:anjanasankar50@gmail.com"><Mail size={13} /> SAY HELLO</a>
        </header>
        <div className="window-status"><span>status: online</span><span>last updated: 08/17/2026</span><span>best viewed with curiosity</span></div>
        {children}
        <footer className="site-footer editorial-footer"><span>© 2026 ANJANA SANKAR</span><span className="footer-rule" /><span>BUILT WITH CURIOSITY + COFFEE</span></footer>
      </div>
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="page-intro"><p className="editorial-eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-description">{description}</p>}</div>;
}

export function LinkRow({ label, href }: { label: string; href: string }) {
  return <a className="external-row" href={href} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight size={16} /></a>;
}
