import type { ReactElement } from 'react';

interface SocialLink {
  platform: string;
  href: string;
  icon: ReactElement;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm dark:bg-card-dark">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary dark:text-foreground-dark"
          aria-label={`Visit ${link.platform}`}
        >
          <span className="text-primary" aria-hidden>
            {link.icon}
          </span>
          <span className="text-sm font-semibold">{link.platform}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
