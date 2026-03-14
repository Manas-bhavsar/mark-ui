import ComponentsShowcaseHero from '@/components/showcase/ComponentsShowcaseHero';
import ComponentsShowcaseLayout from '@/components/showcase/ComponentsShowcaseLayout';
import ComponentsShowcaseCTA from '@/components/showcase/ComponentsShowcaseCTA';
import '@/styles/showcase.css';

export default function ComponentsPage() {
  return (
    <div className="components-showcase-page">
      <ComponentsShowcaseHero />
      <ComponentsShowcaseLayout />
      <ComponentsShowcaseCTA />
    </div>
  );
}
