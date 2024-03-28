import { useContext } from 'react';
import { NewsletterContext } from '../context/NewsletterContext';

export const useNewsletterHook = () => {
  const context = useContext(NewsletterContext);

  return context;
};
