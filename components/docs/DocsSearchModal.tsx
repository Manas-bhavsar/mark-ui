"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Modal, Input } from "@/packages/core";
import { DOCS_NAV } from "./DocsNavData";

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Flatten navigation for search
const searchableItems = DOCS_NAV.flatMap((section) => {
  if (section.title === "GETTING STARTED") {
    return section.items.map((item: any) => ({ ...item, section: section.title }));
  }
  if (section.title === "THEMES") {
    return section.items.map((item: any) => ({ ...item, section: section.title }));
  }
  if (section.title === "COMPONENTS") {
    return section.items.flatMap((group: any) => 
      group.items.map((item: any) => ({ ...item, section: `Component / ${group.label}` }))
    );
  }
  return [];
});

export default function DocsSearchModal({ isOpen, onClose }: DocsSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const results = query
    ? searchableItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Global ⌘K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open is handled in the parent, but we can't easily force it here without app-wide state.
          // Wait, the parent listens for ⌘K too, or we manage it there.
          // For simplicity, we'll let parent handle the global listener and pass isOpen.
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        router.push(results[selectedIndex].href);
        onClose();
      }
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} size="md">
      <div style={{ padding: 16 }}>
        <div onKeyDown={handleKeyDown} style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        {query && results.length === 0 && (
          <div style={{ padding: "32px 0", textAlign: "center", color: "var(--mark-fg)", opacity: 0.6, fontSize: 14 }}>
            No results found for "{query}"
          </div>
        )}

        {results.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, maxHeight: "60vh", overflowY: "auto" }}>
            {results.map((item, index) => (
              <div
                key={item.href}
                onClick={() => {
                  router.push(item.href);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 6,
                  cursor: "pointer",
                  background: index === selectedIndex ? "var(--mark-bg-elevated)" : "transparent",
                  color: index === selectedIndex ? "var(--mark-accent)" : "var(--mark-fg)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div style={{ fontWeight: 500 }}>{item.name}</div>
                <div style={{ fontSize: 12, opacity: 0.5, fontFamily: "var(--mark-font-body)" }}>{item.section}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
