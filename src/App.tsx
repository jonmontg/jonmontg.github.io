import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GnnFlightDelayPage from "./pages/projects/GnnFlightDelayPage";
import AgentPrivacyPage from "./pages/projects/AgentPrivacyPage";
import AdlmClinicalRagPage from "./pages/projects/AdlmClinicalRagPage";
import SchillerDataPage from "./pages/SchillerDataPage";
import DeepfakeAudioDetectionPage from "./pages/DeepfakeAudioDetectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/projects/gnn-flight-delay" element={<Layout><GnnFlightDelayPage /></Layout>} />
        <Route path="/projects/agent-privacy" element={<Layout><AgentPrivacyPage /></Layout>} />
        <Route path="/projects/adlm-clinical-rag" element={<Layout><AdlmClinicalRagPage /></Layout>} />
        <Route path="/Shiller-data" element={<Layout><SchillerDataPage /></Layout>} />
        <Route path="/Deepfake-audio-detection" element={<Layout><DeepfakeAudioDetectionPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
