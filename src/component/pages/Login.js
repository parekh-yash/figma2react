import React from "react";
import "../css/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validation = () => {
  Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
};

//..............

function login() {
  return (
    <>
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="circle-4" />

      <div className="login-container">
        <div className="login-box">
          <div className="login-card">
            <div className="login-title">
              <h1>
                Welcome back,<b> Ouly.AI</b>
              </h1>
              <h6>Welcome back! please enter your details.</h6>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validation}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="login-form-group">
                    <div className="login-email">
                      <label className="login-label" htmlFor="email">
                        Email
                      </label>
                      <Field
                        className="login-email"
                        type="email"
                        placeholder="Ouly12@gmail.com"
                        name="email"
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="login-password">
                      <label className="login-label" htmlFor="password">
                        Password
                      </label>
                      <Field
                        type="password"
                        placeholder="********"
                        name="password"
                      />
                      <ErrorMessage name="password" />
                    </div>
                    <div className="login-options">
                      <label htmlFor="checkbox">
                        <Field
                          type="checkbox"
                          id="checkbox"
                          name="Remember Me"
                        />
                        Remember Me
                      </label>
                      <Link to="/ForgotPassword">Forgot Password?</Link>
                    </div>
                    <div className="login-submit">
                      <button className="login-button">Login</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/Signup"> Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default login;
