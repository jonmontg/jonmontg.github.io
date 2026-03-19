export default function GnnFlightDelayPage() {
  return (
    <main className="container px-4 py-8 max-w-6xl flex-grow">
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">GNN Flight Delay</h2>
          <p className="text-base-content">
            Project paper (PDF) rendered inline. You can also{" "}
            <a
              className="link link-primary"
              href="/graph_nn_flight_prediction.pdf"
              target="_blank"
              rel="noreferrer"
            >
              open in a new tab
            </a>{" "}
            or{" "}
            <a className="link link-primary" href="/graph_nn_flight_prediction.pdf" download>
              download
            </a>
            .
          </p>
        </header>

        <div className="w-full rounded-lg border border-base-300 bg-base-100 overflow-hidden">
          <iframe
            src="/graph_nn_flight_prediction.pdf"
            title="GNN Flight Delay PDF"
            className="w-full h-[75vh]"
          />
        </div>
      </section>
    </main>
  );
}

