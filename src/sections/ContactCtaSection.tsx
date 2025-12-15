import Button from '../components/Button';

const ContactCtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 px-8 py-10 shadow-sm backdrop-blur md:px-12 md:py-14 dark:border-primary/30 dark:bg-primary/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Let&apos;s talk</h3>
              <p className="text-slate-700 dark:text-slate-200">Ready to collaborate on your next project? I&apos;d love to hear from you.</p>
            </div>
            <Button to="/contact">Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
