/**
 * ComponentsShowcaseCTA
 * 
 * Call-to-action section for the Components Showcase Page.
 * Encourages users to visit the full documentation.
 * 
 * Server Component - no interactivity needed.
 */

import Link from 'next/link';

export default function ComponentsShowcaseCTA() {
  return (
    <section 
      className="flex flex-col items-center justify-center text-center"
      style={{ 
        padding: '64px 24px',
        background: 'var(--mark-bg-surface)'
      }}
    >
      {/* Heading */}
      <h2 
        className="text-4xl md:text-5xl mb-4"
        style={{ 
          fontFamily: 'var(--mark-font-display)',
          color: 'var(--mark-fg)'
        }}
      >
        Want the full details?
      </h2>

      {/* Subtext */}
      <p 
        className="text-lg md:text-xl max-w-2xl mb-8"
        style={{ 
          fontFamily: 'var(--mark-font-body)',
          color: 'var(--mark-fg)',
          opacity: 0.8
        }}
      >
        Every component has a dedicated docs page with props tables, all variants, states, and animation details.
      </p>

      {/* Button */}
      <Link 
        href="/docs"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all"
        style={{
          background: 'var(--mark-accent-primary)',
          color: 'var(--mark-bg)',
          fontFamily: 'var(--mark-font-display)',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        Open the Docs →
      </Link>
    </section>
  );
}
