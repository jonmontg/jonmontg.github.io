import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Hello, DaisyUI!</h2>
          <p>This is a styled card using Tailwind + DaisyUI.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
