import React from "react";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  return (
    <div className="container formContainer row">
      <div className="col-sm">
        {/* <button className="btn-warning" onClick={myFunction}>Testing</button> */}
        <div className="d-flex justify-content-center align-items-center">
          {/* <img src="mainlogo.png" alt="Nutrition bee" width="100%" /> */}
        </div>
        <div className="my-4">
          <h5>
            <b>Rules for opening an account</b>
          </h5>
          <p>
            1) Please use your full name because the certificate will be issued
            on this name.
          </p>
          <p>
            2) Please use a valid email and phone number as Nutrition Bee will
            contact you through this email or phone number.
          </p>
          <p>
            3) You should use at least six characters/numbers for your password.
          </p>
          <p>
            4) You cannot open a duplicate account with the{" "}
            <b>same email address and phone number.</b> A unique phone number
            and email address can only be used once.
          </p>
        </div>
        <br />
        <Link
          to="/registration/register"
          className="btnLogin"
          style={{ textDecoration: "none", color: "black" }}
        >
          Accept
        </Link>
      </div>
    </div>
  );
}
