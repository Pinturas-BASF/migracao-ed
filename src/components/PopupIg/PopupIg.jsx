import { useState, useEffect } from "react";
import styles from './PopupIg.module.css';
import bgMobile from '../../assets/PopUp/fondos/backgroundMobile.svg';
import bgDesktop from '../../assets/PopUp/fondos/backgroundDesktop.svg';
import closeIcon from '../../assets/PopUp/utils/trailing-icon-button.svg';
import Logo from '../../assets/logo/Logo.svg';

const POPUP_KEY = 'ig_popup_shown';
const INACTIVITY_MS = 3 * 60 * 1000;
const PopupIg = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(POPUP_KEY)) return;

    let timer;

    const showPopup = () => {
      setIsOpen(true);
      localStorage.setItem(POPUP_KEY, 'true');
      cleanup();
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(showPopup, INACTIVITY_MS);
    };

    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];

    const cleanup = () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, resetTimer));
    };

    events.forEach(e => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();

    return cleanup;
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>

        <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Cerrar">
          <img src={closeIcon} alt="" />
        </button>

        <img src={bgMobile} alt="" className={`${styles.bg} ${styles.bgMobile}`} />
        <img src={bgDesktop} alt="" className={`${styles.bg} ${styles.bgDesktop}`} />

        <div className={styles.content}>
          <img src={Logo} alt="BASF" className={styles.logo} />
          <div className={styles.textGroup}>
            <p className={styles.text}>¡Seguinos en</p>
            <p className={styles.text}><strong>Instagram!</strong></p>
            <a
              href="https://www.instagram.com/basf_soluciones_para_pinturas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igBtn}
            >
              Ir al Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopupIg;
