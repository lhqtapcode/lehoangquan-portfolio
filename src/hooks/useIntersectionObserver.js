import { useState, useEffect, useRef } from 'react';

/**
 * A hook to observe when an element enters or leaves the viewport
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - A number between 0 and 1 indicating the percentage of the element that needs to be visible
 * @param {string|Element} options.root - The element that is used as the viewport for checking visibility
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {Array} - [ref, isIntersecting, entry]
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  triggerOnce = false
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);
  const prevIsIntersecting = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        
        if (triggerOnce && prevIsIntersecting.current) {
          // If we only want to trigger once and we've already
          // triggered, don't update isIntersecting
          return;
        }
        
        setIsIntersecting(entry.isIntersecting);
        prevIsIntersecting.current = entry.isIntersecting;
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;