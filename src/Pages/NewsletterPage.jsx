import FooterComponent from '../components/layout/FooterComponent';
import FormComponent from '../components/FormComponent';
import ImageComponent from '../components/ImageComponent';
import ListComponent from '../components/ListComponent';

const NewsletterPage = () => {
  return (
    <>
      <div className="main-container">
        {/* Sign-up form start */}
        <div className="form-left">
          <h1 className="header">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          {/* ListItems */}
          <ListComponent />

          {/* Form */}
          <FormComponent />
        </div>

        {/* Image */}
        <ImageComponent />
        {/* <!-- Sign-up form end --> */}
      </div>

      {/* Footer */}
      <FooterComponent />
    </>
  );
};

export default NewsletterPage;
