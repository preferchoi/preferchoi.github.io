import type { ReactElement } from 'react';

interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  icon?: ReactElement;
}

interface ContactInfoProps {
  heading: string;
  description?: string;
  items: ContactInfoItem[];
  responseNote?: string;
}

const ContactInfo = ({ heading, description, items, responseNote = 'We respond within 1–2 business days.' }: ContactInfoProps) => {
  return (
    <section className="rounded-lg border border-border bg-card p-6 shadow-sm dark:bg-card-dark">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">{heading}</h3>
        {description && <p className="text-muted-foreground dark:text-muted-foreground">{description}</p>}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3 rounded-md bg-surface p-4 dark:bg-surface-dark">
            {item.icon && <span className="mt-1 text-primary" aria-hidden>{item.icon}</span>}
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-base font-semibold text-foreground underline-offset-2 hover:text-primary hover:underline dark:text-foreground-dark"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base font-semibold text-foreground dark:text-foreground-dark">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {responseNote && (
        <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">{responseNote}</p>
      )}
    </section>
  );
};

export default ContactInfo;
