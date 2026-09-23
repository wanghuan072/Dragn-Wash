"use client";

import Link from "@/components/DocumentLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/config/navigation";
import { searchIndex } from "@/lib/search";
import styles from "@/style/layout/header.module.css";

export default function AppHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenSubmenu(null);
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenSubmenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, []);

  const closeNavigation = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };
  const hasDesktopPointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const queryTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = queryTerms.length
    ? searchIndex.filter((item) => {
        const haystack = `${item.title} ${item.description} ${item.category} ${item.keywords ?? ""}`.toLowerCase();
        return queryTerms.every((term) => haystack.includes(term));
      }).slice(0, 6)
    : [];

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/" onClick={closeNavigation} aria-label="Drag'n Wash Field Manual home">
          <span className={styles.brandMark} aria-hidden="true"><Image src="/images/logo.png" width={48} height={48} alt="" priority /></span>
          <span className={styles.brandText}><strong>Drag&apos;n <b>Wash</b></strong><small>PLAYER FIELD MANUAL</small></span>
        </Link>
        <button className={styles.toggle} type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
        <nav className={`${styles.nav} ${mobileOpen ? styles.open : ""}`} aria-label="Main navigation">
          {primaryNavigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")) || item.children?.some((child) => pathname === child.href || pathname.startsWith(child.href + "/"));
            return (
              <div
                className={styles.navItem}
                key={item.href}
                onMouseEnter={() => item.children && hasDesktopPointer() && setOpenSubmenu(item.href)}
                onMouseLeave={() => item.children && hasDesktopPointer() && setOpenSubmenu((current) => current === item.href ? null : current)}
              >
                <Link href={item.href} className={active ? styles.active : ""} onClick={closeNavigation}>
                  <span>{item.label}</span>
                </Link>
                {item.children && (
                  <>
                    <button type="button" className={styles.submenuToggle} aria-label={`Show ${item.label} pages`} aria-expanded={openSubmenu === item.href} onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}><span /></button>
                    {openSubmenu === item.href && (
                      <div className={styles.submenu}>
                        <div className={styles.submenuHeading}><span>EXPLORE</span><strong>{item.label}</strong><Link href={item.href} onClick={closeNavigation}>Overview →</Link></div>
                        {item.children.map((child) => (
                          <Link href={child.href} key={child.href} onClick={closeNavigation}>
                            <span><strong>{child.label}</strong><em>{child.description}</em></span><b aria-hidden="true">›</b>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>
        <div className={styles.search}>
          <label className="sr-only" htmlFor="site-search">Search the site</label>
          <span className={styles.searchIcon} aria-hidden="true" />
          <input id="site-search" type="search" value={query} onFocus={() => setSearchFocused(true)} onBlur={() => setTimeout(() => setSearchFocused(false), 160)} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides, dragons..." />
          {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>×</button>}
          {searchFocused && query.trim() && (
            <div className={styles.results} role="status">
              {results.length ? results.map((result) => (
                <Link key={result.href} href={result.href} onClick={() => { setQuery(""); setSearchFocused(false); closeNavigation(); }}>
                  <small>{result.category}</small><strong>{result.title}</strong><span>{result.description}</span>
                </Link>
              )) : <p>No results. Try “wash”, “route”, or “stuck”.</p>}
            </div>
          )}
        </div>
        <div className={styles.shiftPlate} aria-label="Wash bay status"><i aria-hidden="true" /><span><small>SHIFT 01</small>BAY OPEN</span></div>
      </div>
    </header>
  );
}
