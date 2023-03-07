import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../css/signup.css";

const phoneRegExp = 0;
const validation = () => {
  Yup.object().shape({
    firstName: Yup.string()
      .firstName("Please Enter Your First Name")
      .required("First Name is Required"),
    lastName: Yup.string()
      .fastName("Please Enter Your First Name")
      .required("First Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string()
      .mobile.matches(phoneRegExp, "Invalid phone number")
      .require("Mobile number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
};

//..............

function Signup() {
  return (
    <>
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="circle-4" />

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
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }}
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
}

export default Signup;
