const Body = () => (
  <main className="container px-4 py-8 max-w-4xl flex-grow">
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold text-primary">About Me</h2>
      <p className="text-base-content">
        I’m Jonathan Montgomery, a data-driven software professional with a strong foundation in full-stack engineering and a growing specialization in data science and data engineering. As a Software Systems Specialist at Indigo BioAutomation, I develop scalable tools and analytics pipelines that support high-throughput scientific workflows in LCMS laboratories.
      </p>
      <p className="text-base-content">
        My work blends software engineering with data expertise: I’ve designed domain-specific languages in Ruby and Scheme for QA and reporting, architected integrated LLM-powered data manipulation tools with AWS Bedrock, modeled baseline signal noise in scientific datasets, and built cloud-native solutions that leverage AWS S3, Redshift, and Flask for data access and interactive analysis. I also manage GitHub-based infrastructure for 140+ custom client sites, improving deployment and reporting workflows at scale.
      </p>
      <p className="text-base-content">
        Previously at Epic Systems, I developed perioperative messaging workflow applications in C#/.NET and React, built data pipelines in NoSQL environments, and led the creation of regulatory reports for healthcare pricing transparency.
      </p>
      <p className="text-base-content">
        Currently, I’m pursuing an M.S. in Data Science at the University of Denver, with a focus on machine learning, MLOps, and statistical modeling. My academic and consulting work includes environmental data analysis for the Indiana EPA and tutoring in advanced CS topics like distributed systems and bioinformatics.
      </p>
      <p className="text-base-content">
        I’m seeking opportunities where I can apply my skills in data architecture, machine learning, and statistical analysis to solve real-world problems, drive data-informed decisions, and contribute to impactful products.
      </p>

      <div className="divider"></div>

      <h2 className="text-3xl font-semibold text-primary">Skills</h2>
      <ul className="list-disc list-inside space-y-2 text-base-content">
        <li>Python, R, SQL, Ruby, Scheme</li>
        <li>Machine Learning & Data Engineering</li>
        <li>React, TypeScript, Node.js</li>
        <li>Cloud: AWS Certified Cloud Practitioner, AWS Certified AI Practitioner</li>
      </ul>

      <div className="divider"></div>
    </section>
  </main>
);

export default Body;