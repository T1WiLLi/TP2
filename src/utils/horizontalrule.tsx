import React, { useEffect, useRef, useState } from "react";

const HorizontalRule: React.FC = () => {
  const hrRef = useRef<HTMLDivElement>(null);
  const [hrVisible, setHrVisible] = useState(false);

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setHrVisible(true);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (hrRef.current) {
        observer.observe(hrRef.current);
    }

    return () => {
        if (hrRef.current) {
            observer.unobserve(hrRef.current);
        }
    };
  }, []);

  return (
    <div className={`hr ${hrVisible ? "grow-from-left show" : "grow-from-left"}`} ref={hrRef}></div>
  );
};

export default HorizontalRule;
