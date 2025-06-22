import { useEffect } from 'react';
import ReactGA from "react-ga4";

export default function SchillerDataPage() {
  useEffect(() => {
    // Track page view when SchillerDataPage mounts
    ReactGA.send({
      hitType: "pageview",
      page: "/Shiller-data",
      title: "Shiller Data"
    });
  }, []);

  return (
    <main className="container px-4 py-8 max-w-6xl flex-grow">
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-primary">Shiller Data Analysis</h2>

        {/* IPython Notebook Container */}
        <div className="bg-base-100 rounded-lg shadow-lg p-6">
          <div className="prose prose-lg max-w-none">
            <div className="notebook-container">
              <iframe
                src="https://nbviewer.org/github/jonmontg/data_analysis/blob/main/shiller_data/analysis.ipynb"
                width="100%"
                height="800px"
                title="Shiller Data Notebook"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}