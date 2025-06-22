import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from "./pages/HomePage";
import SchillerDataPage from "./pages/SchillerDataPage";
import DeepfakeAudioDetectionPage from "./pages/DeepfakeAudioDetectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/Shiller-data" element={<Layout><SchillerDataPage /></Layout>} />
        <Route path="/Deepfake-audio-detection" element={<Layout><DeepfakeAudioDetectionPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
