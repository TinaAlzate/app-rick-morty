import { useEffect } from "react";

export const IntersectionObserverFunc = (elementRef, callback, data) => {

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [elementRef, callback, data]);
};
