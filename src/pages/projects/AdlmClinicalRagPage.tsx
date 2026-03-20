import { useState } from 'react';

export default function AdlmClinicalRagPage() {
  const startSeconds = 1342; // 22:42
  const [videoReload, setVideoReload] = useState(0);

  return (
    <main className="container px-4 py-8 max-w-6xl flex-grow">
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">ADLM Clinical RAG</h2>
          <p className="text-base-content leading-relaxed">
            Winning submission for the <span className="font-semibold">2025 ADLM LabDocs Data Science Challenge</span>:
            a retrieval-augmented generation (RAG) system that helps laboratory professionals extract and present
            user-requested information from a large, heterogeneous document store—so they can spend less time
            searching protocols, package inserts, regulatory filings, and checklists, and more time on impactful work.
          </p>

          <div className="mt-3">
            <a
              className="link link-primary"
              href="https://github.com/jonmontg/ADLM-2025-Data-Challenge"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo: jonmontg/ADLM-2025-Data-Challenge
            </a>
          </div>
        </header>

        <div className="divider" />

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">The Challenge (2025 ADLM)</h3>
          <p className="text-base-content leading-relaxed">
            Laboratories generate vast documentation—protocols, package inserts, regulatory materials such as 510(k)
            clearance documents, and checklists. Navigating these resources is time-consuming and slows decision-making
            and compliance management.
          </p>
          <p className="text-base-content leading-relaxed">
            The <span className="font-semibold">2025 ADLM Data Science Challenge</span> asked teams to build an AI tool
            that <span className="font-semibold">ingests a representative document store</span> and{" "}
            <span className="font-semibold">extracts and presents user-requested information</span> quickly and
            accurately. Preliminary scoring emphasized{" "}
            <span className="font-semibold">accuracy</span>, <span className="font-semibold">user experience</span>,{" "}
            <span className="font-semibold">explainability</span> (references to relevant document sections), and{" "}
            <span className="font-semibold">best practices</span> in code, deployment, and documentation. The top two
            teams presented in a live webinar; finalists then competed on speed and accuracy to new questions.
          </p>
        </section>

        <div className="divider" />

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Project Presentation Outline</h3>
          <ol className="list-decimal list-inside space-y-3 text-base-content">
            <li>
              <span className="font-semibold">Introduction</span>
              <span className="block text-sm text-base-content/70 mt-1">
                The challenge is not “another chatbot,” it is grounded Q&amp;A over a real document store where wrong
                answers carry compliance and quality risk. My approach treats{" "}
                <span className="font-semibold">retrieval + citations</span> as the product: answers must be traceable to
                specific documents and passages, matching the competition’s explainability criterion.
              </span>
            </li>
            <li>
              <span className="font-semibold">Problem &amp; Requirements</span> (document variety, accuracy, citations,
              latency).
              <span className="block text-sm text-base-content/70 mt-1">
                We optimized for: (1) <span className="font-semibold">factual, rubric-aligned answers</span> on held-out
                user requests; (2) <span className="font-semibold">navigable outputs</span> with clear references to source
                sections; (3) <span className="font-semibold">robustness across document types</span> (e.g., protocols,
                inserts, regulatory-style PDFs) typical of laboratory documentation; and (4) <span className="font-semibold">
                low latency</span> for interactive use.
              </span>
            </li>
            <li>
              <span className="font-semibold">Data &amp; Ingestion</span>
              <span className="block text-sm text-base-content/70 mt-1">
                The solution pipeline ingests the provided document corpus, extracts text from PDFs, normalizes structure
                where possible, and segments content into retrieval units with metadata (e.g., document id, section
                hints). Chunking balances <span className="font-semibold">recall</span> (not missing relevant context) with{" "}
                <span className="font-semibold">precision</span> (avoiding noisy, oversized chunks that confuse retrieval). Chunks
                are contextualized according to the contextual retrieval framework.
              </span>
            </li>
            <li>
              <span className="font-semibold">Retrieval Architecture</span>
              <span className="block text-sm text-base-content/70 mt-1">
                We use <span className="font-semibold">hybrid retrieval</span>: lexical recall (e.g., BM25-style keyword
                matching) plus dense vector search for semantic overlap. Candidates are fused and re-ranked so the LLM
                receives a tight, evidence-bearing context bundle—reducing hallucinations and supporting citation to
                specific passages.
              </span>
            </li>
            <li>
              <span className="font-semibold">LLM / Generation Layer</span>
              <span className="block text-sm text-base-content/70 mt-1">
                Generation is constrained to <span className="font-semibold">use retrieved evidence</span>; responses
                include <span className="font-semibold">citations or pointers</span> back to the supporting documents and
                segments, aligning with the challenge’s explainability requirements and the preliminary UX rubric.
              </span>
            </li>
            <li>
              <span className="font-semibold">Validation &amp; Evaluation</span>
              <span className="block text-sm text-base-content/70 mt-1">
                Preliminary scoring used a <span className="font-semibold">standardized rubric</span> on a test set of
                user requests (accuracy), alongside UX and explainability. I iterated on retrieval quality, citation
                fidelity, and failure modes (e.g., unsupported claims when evidence is thin).
              </span>
            </li>
            <li>
              <span className="font-semibold">Performance &amp; Scaling</span>
              <span className="block text-sm text-base-content/70 mt-1">
                The system targets <span className="font-semibold">interactive use</span>: batch indexing and embedding
                upfront, with query-time retrieval + generation tuned for responsive turnaround on typical questions.
                The end-to-end response loop (retrieval, constrained generation, and citation assembly) takes
                approximately <span className="font-semibold">4.5 seconds</span> in the competition setup. The search
                time is trivial, and the response time is dominated by the LLM API calls. This design is comfortably
                scalable to much larger document stores (millions of documents).
              </span>
            </li>
            <li>
              <span className="font-semibold">Lessons Learned</span>.
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-base-content/70">
                <li>
                  <span className="font-semibold">Retrieval quality dominates:</span> most “LLM failures” are retrieval
                  failures first.
                </li>
                <li>
                  <span className="font-semibold">Citations are a feature:</span> they improve trust and double as a
                  debugging interface for the team.
                </li>
                <li>
                  <span className="font-semibold">Heterogeneous PDFs reward robust ingestion</span> and careful chunking
                  more than prompt tricks alone.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Future Work</span>.
              <span className="block text-sm text-base-content/70 mt-1">
                Next milestone: <span className="font-semibold">stronger evaluation loops</span> (automatic checks +
                human review) and extending ingestion to additional document layouts and metadata—moving from
                competition-grade to production-grade lab informatics workflows.
              </span>
            </li>
          </ol>
        </section>

        <div className="divider" />

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold text-primary">Presentation</h3>
          <p className="text-base-content text-sm">
            Recording from the ADLM finalists webinar (live competition format). Use{" "}
            <span className="font-semibold">Start here</span> to jump to the segment where this project is presented.
          </p>
          <div className="rounded-lg border border-base-300 bg-base-100 overflow-hidden">
            <div className="p-4 border-b border-base-300">
              <p className="text-sm text-base-content/70 mt-2">
                The presentation starts at <span className="font-semibold">22:42</span>.
                {" "}
                <a
                  className="link link-primary"
                  href="https://www.youtube.com/watch?v=UCuqf-29tk4&t=1342s"
                  onClick={(e) => {
                    e.preventDefault();
                    setVideoReload((v) => v + 1);
                  }}
                >
                  Start here
                </a>
                .
              </p>
            </div>
            <div className="p-4">
              <iframe
                key={videoReload}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/UCuqf-29tk4?start=${startSeconds}&si=0g5be2O7tXNXsjo4&reload=${videoReload}${
                  videoReload > 0 ? '&autoplay=1&mute=1' : ''
                }`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="divider" />
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-primary">UI Example</h3>
        <p className="text-base-content/80">
          An example of the user interface generated for answering questions over the laboratory document store.
        </p>
        <div className="rounded-lg border border-base-300 bg-base-100 overflow-hidden">
          <img
            src="/ADLM.jpg"
            alt="ADLM UI example"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
