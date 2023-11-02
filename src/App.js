import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SuccessMessage from "./components/SuccessMessage";
import "./AppStyles.css";

function MainPage({
  handleSubscribe,
  email,
  setEmail,
  error,
  onSuccessDismiss,
}) {
  return (
    <div className="form desktop-flex">
      <picture>
        <source
          className="desktop-banner-image"
          srcset="./assets/images/illustration-sign-up-desktop.svg"
          media="(min-width: 640px)"
        />
        <img
          className="banner-image"
          src="./assets/images/illustration-sign-up-mobile.svg"
          alt=""
        />
      </picture>
      <div class="desktop">
        <h1 className="title">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list-features">
          <li>
            <img
              className="list-icon"
              alt=""
              src="./assets/images/icon-list.svg"
            />
            Product discovery and building what matters
          </li>
          <li>
            <img
              className="list-icon"
              alt=""
              src="./assets/images/icon-list.svg"
            />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img
              className="list-icon"
              alt=""
              src="./assets/images/icon-list.svg"
            />
            And much more!
          </li>
        </ul>
        <label>
          Email address
          {error && <div className="error-message">{error}</div>}
        </label>
        <input
          type="text"
          placeholder="email@company.com"
          className={`input ${error ? "error" : ""}`}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}

function SuccessPage({ email, onDismiss }) {
  return (
    <div className="container success-container">
      <SuccessMessage email={email} />
      <button className="dismiss-button" onClick={onDismiss}>
        Dismiss
      </button>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/bobbe86">
          Bobby Salazar
        </a>
        .
      </div>
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // A basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Valid email required");
    } else {
      // Simulate an email submission
      // In a real application, you'd send the email to a server
      // and set success to true upon a successful response.
      setSuccess(true);
      setError("");
    }
  };

  const handleDismiss = () => {
    setSuccess(false);
  };

  return (
    // <div>
    //   {success ? (
    //     <SuccessPage email={email} onDismiss={handleDismiss} />
    //   ) : (
    //     <MainPage
    //       handleSubscribe={handleSubscribe}
    //       email={email}
    //       setEmail={setEmail}
    //       error={error}
    //     />
    //   )}
    // </div>
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={success ? "success" : "main"}
          classNames="fade"
          timeout={300}
        >
          {success ? (
            <SuccessPage email={email} onDismiss={handleDismiss} />
          ) : (
            <MainPage
              handleSubscribe={handleSubscribe}
              email={email}
              setEmail={setEmail}
              error={error}
            />
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
