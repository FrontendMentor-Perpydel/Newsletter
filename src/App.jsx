import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import NewsletterPage from './Pages/NewsletterPage';
import SuccessPage from './Pages/SuccessPage';

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
