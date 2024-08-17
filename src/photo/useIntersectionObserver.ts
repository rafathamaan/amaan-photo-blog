// src/hooks/useIntersectionObserver.ts
import { useEffect } from 'react';

function useIntersectionObserver(ref: React.RefObject<HTMLDivElement>, onChange: (isVisible: boolean) => void) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onChange(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onChange]);
}

export default useIntersectionObserver;
