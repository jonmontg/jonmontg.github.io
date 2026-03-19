export default function AboutPage() {
  return (
    <main className="container px-4 py-8 max-w-4xl flex-grow">
      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-primary">About</h2>
          <p className="text-base-content text-lg leading-relaxed">
            I’m Jon Montgomery,a systems specialist who works where research meets engineering.
            My day-to-day is equal parts building production software and pushing on new ideas: turning
            messy, high-throughput scientific workflows into dependable tools, data products, and
            decision-making systems.
          </p>
        </header>

        <div className="divider" />

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">What I do</h3>
          <p className="text-base-content leading-relaxed">
            At Indigo BioAutomation, I build software and analytics pipelines for LCMS laboratories.
            That work spans data engineering (ETLs, data models, warehousing), application development,
            and applied signal processing. In parallel, I’m active in R&amp;D—experimenting with AI and
            machine learning approaches that can move from prototype to workflow.
          </p>
          <p className="text-base-content leading-relaxed">
            A theme across my projects is translating complexity into leverage: domain-specific languages
            in Ruby and Scheme to encode QA rules and automate report generation at scale (processing
            10M+ lab samples monthly), baseline noise models that reduce manual review, and cloud-native
            data systems using AWS (S3, Redshift, Lambda, Bedrock) to support analysis and operational decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">How I approach problems</h3>
          <p className="text-base-content leading-relaxed">
            I’m most effective in environments where correctness and velocity both matter, where you need
            careful thinking about data quality, model behavior, and statistical assumptions, but also
            clean engineering: versioned pipelines, reproducible runs, and systems that are observable
            and maintainable.
          </p>
          <p className="text-base-content leading-relaxed">
            Recently, that’s meant building agentic AI workflows (including MCP-based systems) that help
            teams move faster on technical specification and data manipulation tasks, and pairing them
            with retrieval systems and domain knowledge stores so outputs are grounded and actionable.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Background</h3>
          <p className="text-base-content leading-relaxed">
            Before Indigo, I was a software developer at Epic Systems, building full-stack applications
            for perioperative workflows (C#/.NET + TypeScript/React), designing data-wrangling algorithms
            in NoSQL environments, and delivering automated reporting for government-mandated healthcare
            transparency.
          </p>
          <p className="text-base-content leading-relaxed">
            I’m currently pursuing an M.S. in Data Science at the University of Denver (GPA 4.0), with
            study focused on statistics, machine learning, and MLOps. I also hold AWS Cloud Practitioner
            and AWS AI Practitioner certifications.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Selected work</h3>
          <ul className="space-y-3 text-base-content">
            <li>
              <span className="font-semibold">Clinical RAG system</span>: Built a highly precise retrieval
              system (hybrid BM25 + semantic vector search) with contextual retrieval and cited sources;
              won the ADLM LabDocs Data Science Challenge.
            </li>
            <li>
              <span className="font-semibold">Groundwater quality consulting</span>: Modeled 10 years of
              contamination data using statistical and time-series methods; delivered a report accepted
              by the Indiana EPA.
            </li>
            <li>
              <span className="font-semibold">Deepfake audio detection</span>: Classified real vs. fake
              audio using adversarial hidden Markov models in R, building on prior work with adversarial
              Gaussian mixture models.
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Toolbox</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title text-base">Languages</h4>
                <p className="text-base-content">
                  Python, Ruby, SQL, R, C#, TypeScript, Scheme, C/C++, Bash
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title text-base">Data + ML</h4>
                <p className="text-base-content">
                  PySpark, pandas/polars, scikit-learn, SciPy, Transformers/Hugging Face, signal processing
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title text-base">Cloud + DevOps</h4>
                <p className="text-base-content">AWS, Docker, Terraform, Jenkins, GitHub Actions, CI/CD</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title text-base">Data engineering</h4>
                <p className="text-base-content">S3, Redshift, Lambda, ETL, Airflow, relational + NoSQL</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold text-primary">Resume</h3>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/Resume.pdf" target="_blank" rel="noreferrer">
              View Resume (PDF)
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

