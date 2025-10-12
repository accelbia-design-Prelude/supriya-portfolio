import React, { useEffect } from "react";

import "intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page3: React.FC = () => {
  useEffect(() => {
    const initializeScrolling = () => {
      gsap.registerPlugin(ScrollTrigger);

      const horizontalWrapper = document.querySelector<HTMLElement>(
        "#horizontal-section-wrapper"
      );
      const horizontalScroller = document.querySelector<HTMLElement>(
        ".horizontal-scroller"
      );

      if (horizontalWrapper && horizontalScroller) {
        gsap.to(horizontalScroller, {
          x: () => `-${horizontalScroller.offsetWidth - window.innerWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalWrapper,
            pin: true,
            scrub: 1,
            end: () =>
              `+=${horizontalScroller.offsetWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }

      ScrollTrigger.refresh();
    };

    window.addEventListener("load", initializeScrolling);

    return () => {
      window.removeEventListener("load", initializeScrolling);
    };
  }, []);

  return (
    <section
      id="horizontal-section-wrapper"
      aria-label="Horizontal Scrolling Pages"
    >
      <div className="horizontal-scroller">
        <section
          className="page horizontal-page"
          id="page3"
          aria-label="Page 3"
        >
          <h1>Page 3</h1>
        </section>
        <section
          className="page horizontal-page"
          id="page4"
          aria-label="Page 4"
        >
          <h1>Page 4</h1>
        </section>
        <section
          className="page horizontal-page"
          id="page5"
          aria-label="Page 5"
        >
          <h1>Page 5</h1>
        </section>
        <section
          className="page horizontal-page"
          id="page6"
          aria-label="Page 6"
        >
          <h1>Page 6</h1>
        </section>
      </div>
    </section>
  );
};

export default Page3;
