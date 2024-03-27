import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';

const ImageComponent = () => {
  return (
    <>
      <div className="desktop-image hidden">
        {/* Desktop image */}
        <img
          src={illustrationDesktop}
          alt="Desktop Side Image"
          loading="lazy"
          aria-label="Desktop Side Image"
        />
      </div>
      {/* Mobile Image */}
      <div className="mobile-image hidden">
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
