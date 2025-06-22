import { useEffect } from 'react';
import ReactGA from "react-ga4";

export default function DeepfakeAudioDetectionPage() {
  useEffect(() => {
    // Track page view when DeepfakeAudioDetectionPage mounts
    ReactGA.send({
      hitType: "pageview",
      page: "/deepfake-audio-detection",
      title: "Deepfake Audio Detection"
    });
  }, []);

  return (
    <main className="container px-4 py-8 max-w-6xl flex-grow">
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-primary">Deepfake Audio Detection</h2>

        {/* PDF Container */}
        <div className="bg-base-100 rounded-lg shadow-lg p-6">
          <div className="prose prose-lg max-w-none">
            <div className="pdf-container">
              <iframe
                src="/deepfake_audio_paper.pdf"
                width="100%"
                height="800px"
                title="Deepfake Audio Detection Paper"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}