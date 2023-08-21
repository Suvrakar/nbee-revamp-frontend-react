import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Make the API call here
      axios
        .post(REACT_APP_BASE_URL, values)
        .then((response) => {
          const accessToken = response.data.token;
          localStorage.setItem('accessToken', accessToken);
          setShowSuccess(true);
          setIsLoggedIn(true); 
          navigate('/profile');
        })
        .catch((error) => {
          console.error(error);
          setShowError(true);
        });
    },
    
  });

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
    <div className="container formContainer row">
      <div className="col-sm d-flex justify-content-center align-items-center">
        <div className="p-2">
          <img src="/mainlogo.png" alt="Nutrition bee" width="100%" />
        </div>
      </div>
      <div className="col-sm d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-block">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <span className="placeholder">Email</span>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
          <br />
          <div className="input-block">
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <span className="placeholder">Password</span>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
          <br />
          <button type="submit" className="btnLogin">
            Login
          </button>
          <br />
          <br />
          <p>
            Do not have an account?{" "}
            <a href="/registration/preresigter">Sign Up</a>
          </p>
          <p>
            Forgot Password? <a href="/reset">Click Here</a>
          </p>
        </form>
      </div>
      <Snackbar
        open={showError}
        autoHideDuration={4000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Login failed. Please try again.
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login successful. Redirecting to profile...
        </MuiAlert>
      </Snackbar>
    </div>
    </>
  );
};

export default LoginForm;
