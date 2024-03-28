import { useRef } from 'react';
import styles from '../styles/FormComponent.module.css';
import { useEffect } from 'react';
import { useNewsletterHook } from '../hooks/useNewsletterHook';
// import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const inputRef = useRef(null);

  const {
    email,
    emailEmpty,
    emailInvalid,
    emailValidColor,
    handleEmail,
    handleSubmit,
  } = useNewsletterHook();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Email address {emailEmpty && <span>Email field is required</span>}
        {emailInvalid && (
          <span>Value email required (e.g. johndoe@gmail.com)</span>
        )}
        {emailValidColor ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="email@company.com"
            id={styles.validate}
            value={email}
            onChange={handleEmail}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            placeholder="email@company.com"
            id={styles.formInput}
            value={email}
            onChange={handleEmail}
          />
        )}
      </label>
      <button className={styles.submitBtn} type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default FormComponent;
