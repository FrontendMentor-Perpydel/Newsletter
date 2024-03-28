import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import NewsletterPage from './pages/NewsletterPage';
import SuccessPage from './pages/SuccessPage';
import NewsletterContextProvider from './context/NewsletterContext';

function App() {
  return (
    <>
      <Router>
        <NewsletterContextProvider>
          <Routes>
            <Route path="/" element={<NewsletterPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </NewsletterContextProvider>
      </Router>
      <FooterComponent />
    </>
  );
}

export default App;
