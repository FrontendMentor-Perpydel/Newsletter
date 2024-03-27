import iconSuccess from '../assets/images/icon-success.svg';

const SuccessPage = () => {
  return (
    <div>
      {/* Icon Image */}
      <div>
        <img src={iconSuccess} alt="Success Icon" aria-label='Success Icon' />
      </div>
      {/* <!-- Success message start --> */}
      Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message
      {/* <!-- Success message end --> */}
    </div>
  );
};

export default SuccessPage;
