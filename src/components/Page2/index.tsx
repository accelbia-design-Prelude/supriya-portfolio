import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './style.module.css';
import HLAnimation from './HLAnimation';

const Page2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  const handleResumeClick = () => {
    window.open('/supriya-portfolio/assets/Supriya - Resume.pdf', '_blank');
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll(`.${styles.word}`);
            words.forEach(word => {
              word.classList.add(styles.animate);
            });

            const totalAnimationTime = (words.length * 0.1 + 0.8) * 1000;
            setTimeout(() => setShowButton(true), totalAnimationTime);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const renderWord = (content: ReactNode, index: number) => (
    <span
      key={`word-${index}`}
      className={styles.word}
      style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
    >
      {content}
    </span>
  );

  const text = [
    'A',
    'passionate',
    'fashion',
    'enthusiast',
    'who',
    'views',
    'design',
    'as',
    'a',
    'language',
    'of',
    'self-expression',
    'and',
    'endless',
    'exploration.',
    'I',
    'find',
    'inspiration',
    'in',
    'contrasts,',
    'in',
    <HLAnimation col1="#ffffff" col2="#87ceeb" speed={2}>
      light
    </HLAnimation>,
    'and',
    <HLAnimation col1="#000000" col2="#9b59b6" speed={2}>
      shadow
    </HLAnimation>,
    ',',
    <HLAnimation col1="#228b22" col2="#90ee90" speed={2}>
      nature
    </HLAnimation>,
    'and',
    <HLAnimation col1="#1e90ff" col2="#87ceeb" speed={2}>
      innovation,
    </HLAnimation>,
    'and',
    'translating',
    'them',
    'into',
    'designs',
    'that',
    'speak',
    'individuality',
    'and',
    'intent.',
    'For',
    'me,',
    'fashion',
    'is',
    'not',
    'just',
    'about',
    'creating',
    'garments,',
    'but',
    'about',
    'crafting',
    'experiences',
    'that',
    'connect',
    'vision,',
    'movement,',
    'and',
    'meaning.',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={containerRef} className={styles.aboutMe}>
          {text.map((word, index) => (
            <span key={index}>
              {renderWord(word, index)}
              {index < text.length - 1 && ' '}
            </span>
          ))}
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
