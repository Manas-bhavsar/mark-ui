"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COMPONENT_SECTIONS = [
  { id: "preview", label: "Preview" },
  { id: "playground", label: "Playground" },
  { id: "variants", label: "Variants" },
  { id: "usage", label: "Usage" },
  { id: "accessibility", label: "Accessibility" },
  { id: "props", label: "Props" },
  { id: "import", label: "Import" },
];

export default function DocsTOC() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");

  const isComponentPage = pathname.startsWith("/docs/components/");

  useEffect(() => {
    if (!isComponentPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Triggers near the top
    );

    COMPONENT_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isComponentPage, pathname]);

  if (!isComponentPage) {
    // Return empty container to maintain 3-column layout balance
    // or just render nothing if the layout handles the space.
    // The spec says "Right - On-page TOC (200px) Section anchors, only on component pages"
    return null; /* Will be handled by layout conditional rendering if needed */
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className="docs-toc-container">
      <div className="toc-heading">On this page</div>
      <nav>
        {COMPONENT_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScroll(e, section.id)}
            className="toc-link"
            data-active={activeId === section.id}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
