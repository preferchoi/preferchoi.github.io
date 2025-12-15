const facts = [
  { label: 'Location', value: 'Remote • Willing to relocate' },
  { label: 'Experience', value: '5+ years building web products' },
  { label: 'Currently', value: 'Exploring AI-assisted workflows' },
];

const AboutIntroSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Introduction</p>
            <h2 className="text-3xl font-semibold text-slate-900">A developer who loves thoughtful products.</h2>
            <p className="text-lg text-slate-600">
              {/* Replace this paragraph with your personal story. */}
              I enjoy translating ideas into reliable, user-friendly experiences. From designing system architecture to refining
              the last pixel, I work closely with teams to ship features that feel polished and purposeful.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{fact.label}</p>
                <p className="mt-2 text-sm font-medium text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 p-4 text-sm text-indigo-900">
            {/* Update this blurb with current focus areas. */}
            Currently focused on building maintainable design systems, modern API layers, and thoughtful developer tooling.
          </div>
        </div>
        <div className="w-full lg:justify-self-end">
          <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-indigo-200 shadow-lg">
            <div className="absolute inset-4 rounded-2xl border border-white/70 bg-white/40 backdrop-blur">
              <div className="flex h-full items-center justify-center text-sm font-medium text-slate-500">
                {/* Replace with a personal photo. */}
                Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
