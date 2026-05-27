import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected layout area */}
        <Route element={<Layout />}>
          {/* We will add pages step-by-step */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
