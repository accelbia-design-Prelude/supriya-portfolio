import "./App.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import "intersection-observer"; // Polyfill for IntersectionObserver
declare module "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // Typed text animation
  const typedRef = useRef<HTMLParagraphElement>(null);
  const originalText = useRef<string>("");

  useEffect(() => {
    // Record the original text content
    if (typedRef.current) {
      originalText.current = typedRef.current.textContent || "";
    }

    // Initialize Locomotive Scroll for smooth scrolling
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container") as HTMLElement,
      smooth: true,
    });

    // Handles intersection for text animation
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!typedRef.current) return;

        if (entry.isIntersecting) {
          animateText();
          typedRef.current.style.visibility = "visible";
        } else {
          resetText();
          typedRef.current.style.visibility = "hidden";
        }
      });
    };

    // Animates text word by word
    const animateText = () => {
      if (!typedRef.current || typedRef.current.hasAttribute("data-animated"))
        return;

      const splitText = typedRef.current.textContent
        ?.split(" ")
        .map(
          (word) =>
            `<span style='display: inline-block; margin-right: 0.5em;'>${word}</span>`
        )
        .join("");

      if (splitText) {
        typedRef.current.innerHTML = splitText;
        gsap.fromTo(
          typedRef.current.children,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1, // Increased stagger for slower animation
            duration: 0.5, // Increased duration for smoother animation
            onComplete: () => {
              const resumeLink = document.querySelector(
                ".resume-download-link"
              );
              if (resumeLink) {
                (resumeLink as HTMLElement).style.opacity = "1";
              }
            },
          }
        );
      }
      typedRef.current.setAttribute("data-animated", "true");
    };

    // Resets text to original state when out of view
    const resetText = () => {
      if (!typedRef.current) return;
      typedRef.current.innerHTML = originalText.current;
      typedRef.current.removeAttribute("data-animated");
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the page is in the viewport
    });

    const typedElement = document.querySelector(".typed");
    if (typedElement) {
      observer.observe(typedElement);
    }

    // Custom cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      scroll.destroy();
      observer.disconnect();
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  // Horizontal scroll setup
  const horizontalWrapper = document.querySelector(
    ".horizontal-scroll-wrapper"
  );
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!horizontalWrapper) return;

    const horizontalScrollLength =
      horizontalWrapper.scrollWidth - window.innerWidth;

    gsap.to(".horizontal-scroll-content", {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalWrapper,
        start: "top top",
        end: () => `+=${horizontalScrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, [horizontalWrapper]);

  return (
    <div className="scroll-container">
      <div className="page landing-header">
        <h1>Supriya</h1>
        <h2 className="shimmer">portfolio</h2>
      </div>
      <div className="page">
        <p className="centered typed" ref={typedRef}>
          I am Supriya Kumari, a creative professional skilled in design,
          modeling, and visual merchandising.
        </p>
        <a
          href="/assets/Supriya - Resume.pdf"
          download
          className="resume-download-link link"
        >
          <h2 className="underline">Resume</h2>
        </a>
      </div>
      <div className="page horizontal-scroll-wrapper">
        <div className="horizontal-scroll-content">
          <div className="item">Page 1</div>
          <div className="item">Supriya bakchodi karti hai</div>
          <div className="item">Page 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
