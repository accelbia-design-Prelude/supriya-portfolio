import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

const Page2 = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  const handleResumeClick = () => {
    // Open the resume PDF in a new tab with correct base path
    window.open('/supriya-portfolio/assets/Supriya - Resume.pdf', '_blank');
  };

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into words and wrap each in a span
    const text = textElement.textContent || '';
    const words = text.split(' ');

    textElement.innerHTML = words
      .map((word, index) => {
        // Handle line breaks
        if (word.includes('\n')) {
          return `<span class="${styles.word}" style="--delay: ${
            index * 0.1
          }s">${word.replace(/\n/g, '')}</span><br/>`;
        }
        return `<span class="${styles.word}" style="--delay: ${
          index * 0.1
        }s">${word}</span>`;
      })
      .join(' ');

    // Intersection Observer for animation trigger
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll(`.${styles.word}`);
            words.forEach(word => {
              word.classList.add(styles.animate);
            });

            // Show button after all text animations complete
            // Calculate total animation time: (number of words * delay) + animation duration
            const totalAnimationTime = (words.length * 0.1 + 0.8) * 1000;
            setTimeout(() => {
              setShowButton(true);
            }, totalAnimationTime);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(textElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={textRef} className={styles.aboutMe}>
          A passionate fashion enthusiast who views design as a language of
          self-expression and endless exploration. I find inspiration in
          contrasts, in light and shadow, nature and innovation, and translating
          them into designs that speak individuality and intent. For me, fashion
          is not just about creating garments, but about crafting experiences
          that connect vision, movement, and meaning.
        </div>

        <button
          className={`${styles.resumeButton} ${showButton ? styles.show : ''}`}
          onClick={handleResumeClick}
        >
          resume
        </button>
      </div>
    </div>
  );
};

export default Page2;
