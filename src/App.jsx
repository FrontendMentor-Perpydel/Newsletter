import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newsletter from './pages/Newsletter';
import Success from './pages/Success';
import NewsletterContextProvider from './context/NewsletterContext';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <>
      <Router>
        <NewsletterContextProvider>
          <Routes>
            <Route path="/" element={<Newsletter />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </NewsletterContextProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
