import React, { useState } from "react";
import { sanitize } from "./Utils/Miscellaneous";
import Loading from "./Loading/Loading";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SampleForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };


  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <h1>Subscribe to Newsletter</h1>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const errors = {};
            setError(null);

            // Trigger the button element with a click
            handleFormSubmit();
            // setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              className="border border-gray-700 py-2 px-4"
              type="email"
              name="email"
              placeholder="Enter Email Address"
              required
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />
            <button
              className="bg-gray-700 text-white py-2 px-4"
              type="submit"
              onClick={handleFormSubmit}
              // disabled={isSubmitting}
            >
              Submit
            </button>{" "}
            <ErrorMessage name="email" component="div" />
            <div className="min-h-42px">
              {"sending" === status ? (
                <Loading
                  showSpinner
                  message="Sending..."
                  contentColorClass="text-white"
                  hasVisibilityToggle={false}
                />
              ) : null}
              {"error" === status || error ? (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                  dangerouslySetInnerHTML={{
                    __html: error || getMessage(message),
                  }}
                />
              ) : null}
              {"success" === status && "error" !== status && !error && (
                <div
                  className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: sanitize(message) }}
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SampleForm;
