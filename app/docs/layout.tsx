import "@/styles/docs.css";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsTOC from "@/components/docs/DocsTOC";
import { ToastProvider } from "@/packages/core";

export const metadata = {
  title: "MARK UI Docs",
  description: "The complete documentation site for MARK UI.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="docs-layout">
        {/* Left Sidebar */}
        <DocsSidebar />

        {/* Main Content Area */}
        <main className="docs-main-content">
          {children}
        </main>

        {/* Right TOC (Only renders links on component pages inside) */}
        <DocsTOC />
      </div>
    </ToastProvider>
  );
}
