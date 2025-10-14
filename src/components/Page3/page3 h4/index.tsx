import React from 'react';
import styles from './style.module.css';
import img1 from './img/IMG_1242.JPG';
import img2 from './img/IMG_2288.JPG';
import img3 from './img/IMG_2861.JPG';

const Page3H4: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img className={styles.tn_image} src={img1} alt="Modelling 1" />
        <img className={styles.tn_image} src={img2} alt="Modelling 2" />
        <img className={styles.tn_image} src={img3} alt="Modelling 3" />
      </div>
      <div className={styles.text_container}>
        <span className={styles.text_default}>Modelling</span>
        <span className={styles.text_bebas}>Modelling</span>
      </div>
    </div>
  );
};

export default Page3H4;
