import "./App.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
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
    <div id="main-container">
      <section className="page" id="page1" aria-label="Page 1">
        <h1>Page 1</h1>
      </section>
      <section className="page" id="page2" aria-label="Page 2">
        <h1>Page 2</h1>
      </section>

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

      <section className="page" id="page7" aria-label="Page 7">
        <h1>Page 7</h1>
      </section>
    </div>
  );
}

export default App;
