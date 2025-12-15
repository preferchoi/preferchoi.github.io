import Button from '../components/Button';

const ContactCtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 px-8 py-10 shadow-sm backdrop-blur md:px-12 md:py-14 dark:border-primary/30 dark:bg-primary/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Let&apos;s talk</h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80">
                Ready to collaborate on your next project? Share a few details and I&apos;ll follow up via the contact form.
              </p>
            </div>
            <Button to="/contact">Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
