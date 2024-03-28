import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent.jsx';
import NewsletterPage from './pages/NewsletterPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import NewsletterContextProvider from './context/NewsletterContext.jsx';

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
      {/* Footer */}
      <FooterComponent />
    </>
  );
}

export default App;
