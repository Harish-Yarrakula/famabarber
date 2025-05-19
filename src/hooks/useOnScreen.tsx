import { useState, useEffect, RefObject } from 'react';

function useOnScreen(ref: RefObject<HTMLElement>, threshold = 0.1) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Optional: unobserve once it's been seen
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

export default useOnScreen;