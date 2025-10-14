import React, { useEffect } from 'react';

import 'intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page3H1 from './page3 h1';
import Page3H2 from './page3 h2';
import Page3H3 from './page3 h3';
import Page3H4 from './page3 h4';
import Page3H5 from './page3 h5';

const Page3: React.FC = () => {
  useEffect(() => {
    const initializeScrolling = () => {
      gsap.registerPlugin(ScrollTrigger);

      const horizontalWrapper = document.querySelector<HTMLElement>(
        '#horizontal-section-wrapper'
      );
      const horizontalScroller = document.querySelector<HTMLElement>(
        '.horizontal-scroller'
      );

      if (horizontalWrapper && horizontalScroller) {
        gsap.to(horizontalScroller, {
          x: () => `-${horizontalScroller.offsetWidth - window.innerWidth}px`,
          ease: 'none',
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

    window.addEventListener('load', initializeScrolling);

    return () => {
      window.removeEventListener('load', initializeScrolling);
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
          <Page3H1 />
        </section>
        <section
          className="page horizontal-page"
          id="page4"
          aria-label="Page 4"
        >
          <Page3H2 />
        </section>
        <section
          className="page horizontal-page"
          id="page5"
          aria-label="Page 5"
        >
          <Page3H3 />
        </section>
        <section
          className="page horizontal-page"
          id="page6"
          aria-label="Page 6"
        >
          <Page3H4 />
        </section>
        <section
          className="page horizontal-page"
          id="page7"
          aria-label="Page 7"
        >
          <Page3H5 />
        </section>
      </div>
    </section>
  );
};

export default Page3;
