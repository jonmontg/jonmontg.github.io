export default function AgentPrivacyPage() {
  return (
    <main className="container px-4 py-8 max-w-6xl flex-grow">
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">Agent Privacy</h2>
          <p className="text-base-content">
            Project paper (PDF) rendered inline. You can also{" "}
            <a
              className="link link-primary"
              href="/psit_turing_test.pdf"
              target="_blank"
              rel="noreferrer"
            >
              open in a new tab
            </a>{" "}
            or <a className="link link-primary" href="/psit_turing_test.pdf" download>download</a>.
          </p>
        </header>

        <div className="w-full rounded-lg border border-base-300 bg-base-100 overflow-hidden">
          <iframe src="/psit_turing_test.pdf" title="Agent Privacy PDF" className="w-full h-[75vh]" />
        </div>
      </section>
    </main>
  );
}

