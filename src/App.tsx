import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreatorProfile from './pages/CreatorProfile';
import Analytics from './pages/Analytics';
import BrandDashboard from './pages/BrandDashboard';
import CampaignDiscovery from './pages/CampaignDiscovery';
import BrandProfile from './pages/BrandProfile';
import Brands from './pages/Brands';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creator/:id" element={<CreatorProfile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/brand" element={<BrandDashboard />} />
          <Route path="/campaigns" element={<CampaignDiscovery />} />
          <Route path="/brand/:id" element={<BrandProfile />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
