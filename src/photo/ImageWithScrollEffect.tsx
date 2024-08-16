import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import ImageLarge from '@/components/image/ImageLarge'; // Ensure correct import path

interface ImageComponentProps {
  photo: Photo;
  priority?: boolean;
}

export default function ImageWithScrollEffect({ photo, priority }: ImageComponentProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current?.classList.add('hovered');
        } else {
          imageRef.current?.classList.remove('hovered');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={clsx(
        'transition-transform ease-in-out duration-400',
        'hover:scale-110 hovered:scale-110',
        'hover:shadow-[0_0_15px_5px_rgba(0,128,255,0.75)] hovered:shadow-[0_0_15px_5px_rgba(0,128,255,0.75)]',
        'hover:brightness-125 hovered:brightness-125',
        'hover:saturate-150 hovered:saturate-150',
        'hover:contrast-125 hovered:contrast-125',
        'hover:blur-sm hovered:blur-sm'
      )}
    >
      <ImageLarge
        className={clsx(
          'transition ease-in-out duration-500',
          'hover:scale-105',
          'hover:shadow-glow',
          'hover:filter',
          'hover:backdrop-brightness-200',
          'hover:backdrop-blur-2xl'
        )}
        imgClassName={clsx('object-contain w-full h-full')}
        alt={photo.altText} // Make sure to use appropriate alt text
        src={photo.url}
        aspectRatio={photo.aspectRatio}
        blurDataURL={photo.blurData}
        blurCompatibilityMode={photo.blurCompatibilityMode}
        priority={priority}
      />
    </div>
  );
}
