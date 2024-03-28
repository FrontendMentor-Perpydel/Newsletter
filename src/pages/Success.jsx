import iconSuccess from '../assets/images/icon-success.svg';
import styles from '../styles/SuccessPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useNewsletterHook } from '../hooks/useNewsletterHook';

const Success = () => {
  const { email, setEmail } = useNewsletterHook();
  
  const navigate = useNavigate();

  const handleClickDismiss = () => {
    navigate('/')
    setEmail("");
  };

  return (
    <div className={styles.successContainer}>
      {/* <!-- Success message start --> */}

      <div className={styles.successMessage}>
      {/* Icon Image */}
        <div className={styles.successIcon}>
          <img src={iconSuccess} alt="Success Icon" aria-label="Success Icon" />
        </div>

        <div className={styles.subscribe}>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>. Please
            open it and click the button inside to confirm your subscription.
          </p>{' '}
        </div>
      </div>
      <button className={styles.dismissBtn} onClick={handleClickDismiss}>Dismiss message</button>
      {/* <!-- Success message end --> */}
    </div>
  );
};

export default Success;
