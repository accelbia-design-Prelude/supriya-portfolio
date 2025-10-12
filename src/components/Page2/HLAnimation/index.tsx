import type { ReactNode, CSSProperties } from 'react';
import styles from './style.module.css';

interface HLAnimationProps {
  children: ReactNode;
  col1: string;
  col2: string;
  speed?: number; // animation duration in seconds, default 3s
}

const HLAnimation = ({ children, col1, col2, speed = 3 }: HLAnimationProps) => {
  const style = {
    '--col1': col1,
    '--col2': col2,
    '--speed': `${speed}s`,
  } as CSSProperties;

  return (
    <span className={styles.hlAnimation} style={style}>
      {children}
    </span>
  );
};

export default HLAnimation;
