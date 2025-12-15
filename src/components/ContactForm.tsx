import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import Button from './Button';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const defaultValues: ContactFormValues = {
  name: '',
  email: '',
  subject: 'General inquiry',
  message: ''
};

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (key: keyof ContactFormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
    if (status === 'success') setStatus('idle');
  };

  const validate = useMemo(
    () =>
      (formValues: ContactFormValues) => {
        const newErrors: ContactFormErrors = {};

        if (!formValues.name.trim()) newErrors.name = 'Name is required.';

        if (!formValues.email.trim()) {
          newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
          newErrors.email = 'Please enter a valid email address.';
        }

        if (!formValues.message.trim()) newErrors.message = 'Message is required.';

        return newErrors;
      },
    []
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('success');
    setValues(defaultValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg bg-card p-6 shadow-sm border border-border dark:bg-card-dark"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground dark:text-foreground-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={handleChange('name')}
            placeholder="Your name"
            className="w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/60 dark:border-border dark:bg-surface-dark dark:text-foreground-dark dark:placeholder:text-muted-foreground"
          />
          {errors.name && <p className="text-sm text-primary" role="alert">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground dark:text-foreground-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange('email')}
            placeholder="your@example.com"
            className="w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/60 dark:border-border dark:bg-surface-dark dark:text-foreground-dark dark:placeholder:text-muted-foreground"
          />
          {errors.email && <p className="text-sm text-primary" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground dark:text-foreground-dark">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={values.subject}
          onChange={handleChange('subject')}
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/60 dark:border-border dark:bg-surface-dark dark:text-foreground-dark"
        >
          <option>General inquiry</option>
          <option>Project collaboration</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground dark:text-foreground-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={values.message}
          onChange={handleChange('message')}
          placeholder="Tell me about your project..."
          rows={6}
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/60 dark:border-border dark:bg-surface-dark dark:text-foreground-dark dark:placeholder:text-muted-foreground"
        />
        {errors.message && <p className="text-sm text-primary" role="alert">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">I typically respond within one business day.</p>
        <Button type="submit" className="px-6" aria-label="Send message">
          Send Message
        </Button>
      </div>

      {status === 'success' && (
        <div className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground dark:text-foreground-dark" role="status" aria-live="polite">
          Thanks for reaching out! Your message has been received.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
