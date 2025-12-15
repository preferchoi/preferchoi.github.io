const timeline = [
  {
    year: '2023 — Present',
    title: 'Senior Full-Stack Developer',
    description: 'Leading product squads, mentoring engineers, and shaping technical direction for web platforms.',
  },
  {
    year: '2020 — 2023',
    title: 'Backend Engineer',
    description: 'Designed APIs, improved performance, and shipped new services in a microservice ecosystem.',
  },
  {
    year: '2016 — 2020',
    title: 'Computer Science B.S.',
    description: 'Focused on software engineering principles, algorithms, and human-computer interaction.',
  },
];

const ExperienceTimelineSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Path</p>
          <h2 className="text-3xl font-semibold text-slate-900">Experience & education highlights</h2>
          <p className="text-slate-600 max-w-2xl">
            {/* Update entries with your own roles, internships, and academic milestones. */}
            A quick snapshot of the roles and programs that shaped how I approach product thinking, collaboration, and delivery.
          </p>
        </div>
        <div className="relative">{/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.title} className="relative flex gap-6 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
                  <span className="text-sm font-semibold">•</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">{item.year}</p>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimelineSection;
