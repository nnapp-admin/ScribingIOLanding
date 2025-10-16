import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return {
    ref,
    className: `transition-all duration-1000 ease-out transform ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
  };
};