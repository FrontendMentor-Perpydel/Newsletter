/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeEmail } from '../utils/storeEmail';

export const NewsletterContext = createContext({});

const NewsletterContextProvider = ({ children }) => {
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
      setEmailInvalid(false);
      setEmailEmpty(true);
      setEmailValidColor(true);
    } else if (!validateEmail(email)) {
      setEmailEmpty(false);
      setEmailInvalid(true);
      setEmailValidColor(true);
    } else {
      setEmailEmpty(false);
      setEmailInvalid(false);
      setEmailValidColor(false);
      storeEmail(email);
      navigate('/success');
    }
  };

  return (
    <NewsletterContext.Provider
      value={{
        email,
        setEmail,
        emailEmpty,
        emailInvalid,
        emailValidColor,
        handleEmail,
        handleSubmit,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};

export default NewsletterContextProvider;
