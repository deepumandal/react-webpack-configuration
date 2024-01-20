import React from "react";
import "./app.css";
const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Your Web App</h1>
        <p>
          Generate beautiful templates with ease using{" "}
          <code>npx web-app-init</code>
        </p>
      </header>
      <main className="main">
        <section className="get-started">
          <h2 className="section-title ">Get Started</h2>
          <p>Follow these simple steps to create your project:</p>
          <pre className="code-block ">
            <code>npx web-app-init</code>
          </pre>
        </section>
        <div className="links-container">
          <a
            className="link"
            href="https://github.com/deepumandal/react-webpack-configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a
            className="link"
            href="https://www.npmjs.com/package/web-app-init"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm Package
          </a>
        </div>
      </main>

      <footer className="footer">
        <p>Created with ❤️ by Deepak</p>
      </footer>
    </div>
  );
};

export default App;
