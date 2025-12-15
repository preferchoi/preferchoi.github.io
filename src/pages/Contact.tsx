import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SectionHeader from '../components/SectionHeader';
import SocialLinks from '../components/SocialLinks';

const MailIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const LocationIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GitHubIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18.91 3.5 5.07 5.07 0 0 0 18.82.64S17.73.29 15 2a13.38 13.38 0 0 0-6 0C6.27.29 5.18.64 5.18.64A5.07 5.07 0 0 0 5.09 3.5 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.09V22" />
    <path d="M9 18c-4 2-5-2-8-2" />
  </svg>
);

const LinkedInIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="6" height="12" rx="1" />
    <circle cx="5" cy="5" r="2" />
    <path d="M22 21v-7a4 4 0 0 0-4-4 4 4 0 0 0-4 4v7" />
    <line x1="14" y1="13" x2="22" y2="13" />
  </svg>
);

const TwitterIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2-2 3.1c1.6 10-9.4 15.4-16 8.4 2.2.2 4.4-.6 6-2C5 12.5 3.5 7.5 6 6c2 .6 3.3 2.5 3.3 2.5C11 7.5 12.2 6 14 6c2.5 0 3 2.5 3 2.5a5.86 5.86 0 0 0 4-1.5Z" />
  </svg>
);

const Contact = () => {
  const contactItems = [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com', icon: MailIcon },
    { label: 'Phone', value: '+82 10-1234-5678', href: 'tel:+821012345678', icon: PhoneIcon },
    { label: 'Address', value: 'Seoul, South Korea', icon: LocationIcon },
    { label: 'Hours', value: 'Mon–Fri, 09:00–18:00 (KST)', icon: ClockIcon }
  ];

  const socialLinks = [
    { platform: 'GitHub', href: 'https://github.com/', icon: GitHubIcon },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedInIcon },
    { platform: 'Twitter', href: 'https://twitter.com/', icon: TwitterIcon },
    { platform: 'Email', href: 'mailto:hello@example.com', icon: MailIcon }
  ];

  return (
    <section className="bg-background py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader title="Contact" subtitle="Let's get in touch" />
        <p className="max-w-3xl text-lg text-muted-foreground dark:text-muted-foreground">
          Whether you have a new project in mind, need technical consultation, or just want to say hello, I'm here to help. Choose
          the contact option that suits you best or send a quick message using the form.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <ContactInfo
            heading="Ways to reach me"
            description="Prefer direct contact? Use the details below and I'll respond shortly."
            items={contactItems}
          />
          <ContactForm />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Connect on other platforms</h3>
          <SocialLinks links={socialLinks} />
        </div>

        <div className="w-full rounded-lg bg-muted p-6 text-center text-muted-foreground dark:bg-muted dark:text-muted-foreground">
          <div className="mb-2 h-64 w-full rounded-md bg-surface dark:bg-surface-dark" aria-hidden />
          <p className="text-sm">Map Placeholder — integrate your preferred map provider here.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
