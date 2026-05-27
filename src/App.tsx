import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function SafeHome() {
  return (
    <div style={{ padding: 20 }}>
      <h1>CollabEngine Home 🚀</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SafeHome />} />
      </Routes>
    </Router>
  );
}

export default App;
