import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import NewsletterPage from './pages/NewsletterPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NewsletterPage />} />
          <Route path='/success' element={<SuccessPage />} />
        </Routes>
      </Router>
      {/* Footer */}
      <FooterComponent />
    </>
  );
}

export default App;
