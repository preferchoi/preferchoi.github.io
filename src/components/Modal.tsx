import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const focusableSelectors = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
];

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const getFocusableElements = useCallback(() => {
    if (!dialogRef.current) return [] as HTMLElement[];
    return Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(',')));
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = getFocusableElements();
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'Tab' && focusableElements.length) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [getFocusableElements, isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const focusableElements = getFocusableElements();
      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    }
  }, [getFocusableElements, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="flex items-start justify-between gap-4">
          {title && <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>}
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
        <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-200">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
