import type { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20">
      {children}
    </span>
  );
};

export default Tag;
