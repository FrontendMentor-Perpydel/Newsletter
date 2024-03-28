import styles from '../styles/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <div>
      <div className={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Perpy-del">Perpetual Meninwa</a>.
      </div>
    </div>
  );
};

export default FooterComponent;
