import type { PropsWithChildren } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  accent: string;
  toggleTheme: () => void;
  setAccentColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const DEFAULT_LIGHT_ACCENT = '#7c3aed';
const DEFAULT_DARK_ACCENT = '#0ea5e9';
const DEFAULT_LIGHT_SECONDARY = '#2563eb';
const DEFAULT_DARK_SECONDARY = '#fb923c';

const hexToRgbString = (hex: string) => {
  const normalized = hex.replace('#', '');
  const isShort = normalized.length === 3;
  const value = isShort
    ? normalized
        .split('')
        .map((char) => char + char)
        .join('')
    : normalized;

  const int = Number.parseInt(value, 16);

  if (Number.isNaN(int) || value.length !== 6) {
    return '';
  }

  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;

  return `${r} ${g} ${b}`;
};

const resolveInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveInitialAccent = (theme: Theme) => {
  if (typeof window === 'undefined') return theme === 'dark' ? DEFAULT_DARK_ACCENT : DEFAULT_LIGHT_ACCENT;

  const storedAccent = localStorage.getItem('accent');
  if (storedAccent) return storedAccent;

  return theme === 'dark' ? DEFAULT_DARK_ACCENT : DEFAULT_LIGHT_ACCENT;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const initialTheme = resolveInitialTheme();

  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [accent, setAccent] = useState<string>(() => resolveInitialAccent(initialTheme));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const fallbackPrimary = theme === 'dark' ? DEFAULT_DARK_ACCENT : DEFAULT_LIGHT_ACCENT;
    const fallbackSecondary = theme === 'dark' ? DEFAULT_DARK_SECONDARY : DEFAULT_LIGHT_SECONDARY;
    const rgbPrimary = hexToRgbString(accent || fallbackPrimary);
    const rgbSecondary = hexToRgbString(fallbackSecondary);

    if (rgbPrimary) {
      document.documentElement.style.setProperty('--color-primary', rgbPrimary);
      localStorage.setItem('accent', accent);
    }

    if (rgbSecondary) {
      document.documentElement.style.setProperty('--color-secondary', rgbSecondary);
    }
  }, [accent, theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setAccentColor = (color: string) => {
    setAccent(color);
  };

  const value = useMemo(
    () => ({
      theme,
      accent,
      toggleTheme,
      setAccentColor
    }),
    [accent, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default ThemeContext;
