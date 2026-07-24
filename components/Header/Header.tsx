"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
];

export default function Header() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <Link className={css.logo} href="/" aria-label="Home">
            <svg width="136" height="16">
              <use href="/icons.svg#icon-Logo" />
            </svg>
          </Link>
          <nav aria-label="Main Navigation">
            <ul className={css.navigation}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${css.link} ${isLinkActive(href) ? css.activeLink : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
