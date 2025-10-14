import React from 'react';
import styles from './style.module.css';
import img1 from './img/IMG_1242.JPG';
import img2 from './img/IMG_2288.JPG';
import img3 from './img/IMG_2861.JPG';

const Page3H5: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img
          className={styles.tn_image}
          src={img1}
          alt="Visual Merchandising 1"
        />
        <img
          className={styles.tn_image}
          src={img2}
          alt="Visual Merchandising 2"
        />
        <img
          className={styles.tn_image}
          src={img3}
          alt="Visual Merchandising 3"
        />
      </div>
      <div className={styles.text_container}>
        <span className={styles.text_default}>Visual Merchandising</span>
        <span className={styles.text_bebas}>
          Visual <br /> Merchandising
        </span>
      </div>
    </div>
  );
};

export default Page3H5;
