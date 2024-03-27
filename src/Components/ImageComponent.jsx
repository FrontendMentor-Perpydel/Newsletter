import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';
import styles from '../styles/ImageComponent.module.css';

const ImageComponent = () => {
  return (
    <>
      <div className={styles.desktopImage}>
        {/* Desktop image */}
        <img
          src={illustrationDesktop}
          alt="Desktop Side Image"
          loading="lazy"
          aria-label="Desktop Side Image"
        />
      </div>
      {/* Mobile Image */}
      <div className={styles.mobileImage}>
        <img
          src={illustrationMobile}
          alt="Mobile Image"
          loading="lazy"
          aria-label="Mobile Image"
        />
      </div>
    </>
  );
};

export default ImageComponent;
