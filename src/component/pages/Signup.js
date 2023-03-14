import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../css/signup.css";
import Circles from "./components/Circles";

const validation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please Enter Your First Name")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(2, "Please Enter Your Last Name")
    .required("Last Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid phone number, please enter 10 digits without spaces or hyphens"
    )
    .required("Mobile number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

//..............

const Signup = ({ history }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    history.push({ pathname: "/Dashboard", state: values }); // Redirect to dashboard page on successful login
  };

  return (
    <>
      <Circles />
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-card">
            <div className="signup-title">
              <h1>
                Welcome back,<b> Ouly.AI</b>
              </h1>
              <h6>Welcome back! please enter your details.</h6>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                passwork: "",
              }}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="signup-form-group">
                    <div className="signup-name">
                      <div className="signup-firstName">
                        <label className="signup-label" htmlFor="firstName">
                          First Name
                        </label>
                        <Field
                          className="signup-field"
                          type="firstName"
                          placeholder="Enter First Name"
                          name="firstName"
                        />
                        <ErrorMessage name="firstName" />
                      </div>
                      <div className="signup-lastName">
                        <label className="signup-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <Field
                          className="signup-field"
                          type="lastName"
                          placeholder="Enter Last Name"
                          name="lastName"
                        />
                        <ErrorMessage name="lastName" />
                      </div>
                    </div>
                    <div className="signup-email">
                      <label className="signup-label" htmlFor="email">
                        Email
                      </label>
                      <Field
                        className="signup-field"
                        type="email"
                        placeholder="Ouly12@gmail.com"
                        name="email"
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="signup-mobile">
                      <label className="signup-label" htmlFor="mobile">
                        Mobile Number
                      </label>
                      <Field
                        className="signup-field"
                        type="tel"
                        placeholder="Enter Mobile Number"
                        name="mobile"
                      />
                      <ErrorMessage name="mobile" />
                    </div>
                    <div className="signup-password">
                      <label className="signup-label" htmlFor="password">
                        Password
                      </label>
                      <Field
                        className="signup-field"
                        type="password"
                        placeholder="********"
                        name="passord"
                      />
                    </div>
                    <div className="signup-submit">
                      <button className="signup-button">Sign Up</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="signup">
          <p>
            Already have an account? <Link to="/"> Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
