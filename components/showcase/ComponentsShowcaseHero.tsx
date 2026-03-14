/**
 * ComponentsShowcaseHero
 * 
 * Hero section for the Components Showcase Page.
 * Displays the page title, description, and component count.
 * 
 * Server Component - no interactivity needed.
 */

export default function ComponentsShowcaseHero() {
  return (
    <section className="flex flex-col items-center justify-center text-center" style={{ padding: '64px 24px' }}>
      {/* Tag */}
      <div 
        className="text-sm mb-4"
        style={{ 
          color: 'var(--mark-fg)',
          opacity: 0.6,
          fontFamily: 'var(--mark-font-body)'
        }}
      >
        Phase 1 · 18 components
      </div>

      {/* Heading */}
      <h1 
        className="text-5xl md:text-6xl mb-6"
        style={{ 
          fontFamily: 'var(--mark-font-display)',
          fontWeight: 700,
          color: 'var(--mark-fg)'
        }}
      >
        Every component. Ready to use.
      </h1>

      {/* Subtext */}
      <p 
        className="text-lg md:text-xl max-w-2xl"
        style={{ 
          fontFamily: 'var(--mark-font-body)',
          color: 'var(--mark-fg)',
          opacity: 0.8
        }}
      >
        Fully animated. Fully typed. Fully themeable. Filter by category or browse everything below.
      </p>
    </section>
  );
}
