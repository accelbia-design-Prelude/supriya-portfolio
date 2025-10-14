import { useState, useEffect, useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './style.module.css';

const Page4 = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const subtitleText = 'Get in touch with me through any of these platforms';

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate elements sequentially
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'title']),
              100
            );
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'subtitle']),
              400
            );
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'social1']),
              1200
            );
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'social2']),
              1400
            );
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'social3']),
              1600
            );
            setTimeout(
              () => setVisibleElements(prev => [...prev, 'form']),
              1900
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('access_key', '34d21430-28a3-4814-aa14-35a9240ecc15');
      formData.append('email', email);
      formData.append('subject', 'New Contact from Portfolio');
      formData.append('from_name', 'Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thank you for reaching out! I'll get back to you soon.");
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <h1
        ref={titleRef}
        className={`${styles.title} ${visibleElements.includes('title') ? styles.visible : styles.hidden}`}
      >
        Let's Connect
      </h1>

      <p
        ref={subtitleRef}
        className={`${styles.subtitle} ${visibleElements.includes('subtitle') ? styles.visible : styles.hidden}`}
      >
        {visibleElements.includes('subtitle') &&
          subtitleText.split('').map((char, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{
                animationDelay: `${index * 0.03}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
      </p>

      <div className={styles.socialLinks} ref={socialLinksRef}>
        <a
          href="mailto:iamsupriyakumari.02@gmail.com"
          className={`${styles.socialLink} ${visibleElements.includes('social1') ? styles.visible : styles.hidden}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className={styles.icon} />
          <span>EMAIL</span>
        </a>

        <a
          href="https://www.linkedin.com/in/supriyakumari02/"
          className={`${styles.socialLink} ${visibleElements.includes('social2') ? styles.visible : styles.hidden}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className={styles.icon} />
          <span>LINKEDIN</span>
        </a>

        <a
          href="https://www.instagram.com/_supriya.ku_"
          className={`${styles.socialLink} ${visibleElements.includes('social3') ? styles.visible : styles.hidden}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className={styles.icon} />
          <span>INSTAGRAM</span>
        </a>
      </div>

      <div
        className={`${styles.formContainer} ${visibleElements.includes('form') ? styles.visible : styles.hidden}`}
        ref={formRef}
      >
        <h2 className={styles.formTitle}>or drop your email</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="me@my_email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.emailInput}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {message && <p className={styles.successMessage}>{message}</p>}
      </div>
    </div>
  );
};

export default Page4;
