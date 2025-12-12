import type { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
      {children}
    </span>
  );
};

export default Tag;
