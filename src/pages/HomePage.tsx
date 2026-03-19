import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="container px-4 py-8 max-w-4xl flex-grow">
      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-primary">Jon Montgomery</h2>
          <p className="text-base-content text-lg leading-relaxed">
            Research-minded engineer building data systems, applied ML, and workflow automation for
            high-throughput scientific and clinical domains.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/about" className="btn btn-primary">
              About
            </Link>
            <a className="btn btn-outline" href="/Resume.pdf" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </div>
        </header>

        <div className="divider" />

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold text-primary">Highlights</h3>
          <ul className="space-y-3 text-base-content">
            <li>
              Won the <span className="font-semibold">2025 ADLM LabDocs Data Science Challenge</span>{" "}
              for a RAG system over clinical/lab documents (
              <a
                className="link link-primary"
                href="https://www.linkedin.com/posts/indigo-bioautomation_adlm-datascience-llm-activity-7434975986246512640-Vlde?utm_source=share&utm_medium=member_desktop&rcm=ACoAACMkYYkBGpIam4rS7IoXBC_T-bU88nTM8XM"
                target="_blank"
                rel="noreferrer"
              >
                announcement
              </a>
              ).
            </li>
            <li>
              Active in R&amp;D applying knowledge retrieval and agentic AI to workflow acceleration in
              LCMS environments.
            </li>
            <li>
              AWS Certified Cloud Practitioner and AWS Certified AI Practitioner; build scalable,
              real-time solutions on AWS.
            </li>
            <li>
              MS Data Science candidate (University of Denver, GPA 4.0) focused on statistics, ML, and
              MLOps.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}