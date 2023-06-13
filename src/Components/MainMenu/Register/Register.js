import React from "react";

export default function RegistrationForm() {
  return (
    <div className="container formContainer row">
      <div className="col-sm d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src="/mainlogo.png" alt="Nutrition bee" width="100%" />
        </div>
      </div>
      <div className="col-sm d-flex justify-content-center">
        <form action="/registration/register" method="POST">
          <div className="input-block">
            <input type="text" name="name" id="name" required />
            <span className="placeholder">Name</span>
          </div>
          <br />
          <div className="input-block">
            <input type="email" name="email" id="email" required />
            <span className="placeholder">Email</span>
          </div>
          <br />
          <div className="input-block">
            <input type="text" name="unvname" id="unvname" required />
            <span className="placeholder">Institute Name</span>
          </div>
          <br />
          <div className="input-block">
            <input
              type="number"
              name="phone"
              id="phone"
              minLength="11"
              required
            />
            <span className="placeholder">Phone Number</span>
          </div>
          <br />
          <div className="input-block">
            <input
              type="password"
              name="password"
              id="password"
              minLength="6"
              required
            />
            <span className="placeholder">Password</span>
          </div>
          <br />

          <button type="submit" className="btnLogin">
            Register
          </button>
          <br />
          <br />
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>

        {/* The actual snackbar */}
        <div id="snackbar">Some text some message..</div>
      </div>
    </div>
  );
}
