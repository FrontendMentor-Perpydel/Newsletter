import iconList from '../assets/images/icon-list.svg';
import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';

const listData = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

function App() {
  return (
    <>
      <div className="main-container">
        {/* Sign-up form start */}
        <div className="form-left">
          <h1 className="header">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="list-items">
            {listData.map((list, index) => {
              return (
                <li key={index}>
                  <img
                    src={iconList}
                    alt="icon-list"
                    loading="lazy"
                    aria-label="Icon List"
                  />
                  <span>{list}</span>
                </li>
              );
            })}
          </ul>

          {/* Form */}
          <form className="form">
            <label>
              Email address
              <input
                type="text"
                placeholder="email@company.com"
                id="form-input"
              />
            </label>
            <button className="submit-btn" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        {/* Image */}
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
        {/* <!-- Sign-up form end --> */}
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
