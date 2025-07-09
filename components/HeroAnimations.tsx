"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroAnimationsProps {
  children: React.ReactNode;
}

const HeroAnimations = ({ children }: HeroAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate component loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Progressive animation for each element
    const animateElements = () => {
      const elements = containerRef.current?.querySelectorAll('[data-animate]');
      elements?.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 200 + 300); // Stagger by 200ms each
      });
    };

    if (isLoaded) {
      animateElements();
    }

    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <>
      <style jsx global>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        [data-animate="image"] {
          transform: translateY(50px) scale(0.98);
        }

        [data-animate="image"].animate-in {
          transform: translateY(0) scale(1);
        }

        /* Loading state */
        .hero-loading {
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div 
        ref={containerRef}
        className={`w-full ${isLoaded ? 'hero-loading' : ''}`}
      >
        {children}
      </div>
    </>
  );
};

export default HeroAnimations;
