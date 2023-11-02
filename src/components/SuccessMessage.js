import React from "react";
import "../AppStyles.css";

function SuccessMessage({ email }) {
  return (
    <div class="">
      <img class="success-icon" src="/assets/images/icon-success.svg" alt="" />
      <h2 class="success-h2">Thanks for subscribing! </h2>
      <p class="success-paragraph">
        A confirmation email has been sent to{" "}
        <span className="email-style">{email}</span>. Please open it and click
        the button inside to confirm your subscription
      </p>
    </div>
  );
}

export default SuccessMessage;
