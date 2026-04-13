import { useEffect } from 'react';
import { PRELOAD_IMAGE_PATHS } from '@/lib/siteConfig';

export function ImagePreloader() {
  useEffect(() => {
    const preloadedImages = PRELOAD_IMAGE_PATHS.map((src) => {
      const image = new Image();
      image.decoding = 'async';
      image.loading = 'eager';
      image.src = src;
      return image;
    });

    return () => {
      preloadedImages.forEach((image) => {
        image.src = '';
      });
    };
  }, []);

  return null;
}
