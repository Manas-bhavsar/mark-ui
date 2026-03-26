"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DocsSearchModal from "./DocsSearchModal";
import { DOCS_NAV } from "./DocsNavData";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <aside className="docs-sidebar-container">
        <div className="sidebar-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
          </svg>
          MARK UI Docs
        </div>

        <button className="sidebar-search-btn" onClick={() => setIsSearchOpen(true)}>
          Search docs...
          <span className="search-shortcut">⌘K</span>
        </button>

        <nav className="sidebar-nav">
          {DOCS_NAV.map((section) => (
            <div key={section.title}>
              <div className="sidebar-section-title">{section.title}</div>
              <div className="sidebar-nav-group">
                {section.items.map((item: any) => {
                  // If it's a categorized group (like "Inputs" under Components)
                  if (item.label) {
                    return (
                      <div key={item.label} style={{ marginBottom: "16px" }}>
                        <div className="sidebar-category-title">
                          {item.label}
                        </div>
                        {item.items.map((subItem: any) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="sidebar-nav-link"
                            data-active={pathname === subItem.href}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    );
                  }

                  // If it's a standard link
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="sidebar-nav-link"
                      data-active={pathname === item.href}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <DocsSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
