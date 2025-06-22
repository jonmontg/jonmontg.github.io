import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <Banner />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-primary">About Me</h2>
          <p className="text-base-content">
            I'm a data scientist focused on solving real-world problems through machine learning, engineering, and clean design.
          </p>
          <p className="text-base-content">
            I specialize in model development, statistical analysis, and full-stack data applications. I love sharing knowledge and collaborating on impactful work.
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

          <h2 className="text-3xl font-semibold text-primary">Contact</h2>
          <div className="space-y-2 text-base-content">
            <p>Email: <a href="mailto:jonmontg543@gmail.com" className="link link-primary">jonmontg543@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/jonmontg" className="link link-primary">github.com/jonmontg</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
