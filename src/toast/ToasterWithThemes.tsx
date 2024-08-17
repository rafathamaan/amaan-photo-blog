'use client';
import {useEffect} from 'react';
import { clsx } from 'clsx/lite';
import { useTheme } from 'next-themes';
import { Toaster ,toast} from 'sonner';

export default function ToasterWithThemes() {
  const { theme } = useTheme();
  useEffect(() => {
    toast.success('Welcome to our website! Please Use Search or Tags To Find The Required Images', {
      duration: 5000, // 3 seconds
    });
  }, []);
  return (
    <Toaster
      theme={theme as 'system' | 'light' | 'dark'}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: clsx(
            'flex items-center gap-x-1.5 p-4 w-full',
            'font-mono text-sm',
            'bg-white dark:bg-black',
            'text-gray-900 dark:text-gray-100',
            'border border-gray-200 dark:border-gray-800',
            'rounded-lg',
          ),
        },
      }}
    />
  );
}
