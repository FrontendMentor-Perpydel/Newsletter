import { useRef, useState } from 'react';
import styles from '../styles/FormComponent.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailValidColor, setEmailValidColor] = useState(false);

  const navigate = useNavigate();

  const validateEmail = email => {
    const emailValidate = /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
    return emailValidate.test(email);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '') {
      console.log('Email validation one failed');
      setEmailInvalid(false);
      setEmailEmpty(true);
      setEmailValidColor(true);
    } else if (!validateEmail(email)) {
      console.log('Email validation two failed', validateEmail(email), email);
      setEmailEmpty(false);
      setEmailInvalid(true);
      setEmailValidColor(true);
    } else {
      console.log('PASSED ALL IFS');
      setEmailEmpty(false);
      setEmailInvalid(false);
      setEmailValidColor(false);
      localStorage.setItem('email', email);
      navigate('/success');
    }
  };

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
