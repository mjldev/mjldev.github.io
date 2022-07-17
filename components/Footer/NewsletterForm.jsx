import React, { useState } from "react";
import { sanitize } from "../Utils/Miscellaneous";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SampleForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const handleOnChange = (event) => {
    setEmail(event?.target?.value ?? "");
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center text-center md:text-left lg:text-left xl:text-left px-4 md:px-10 lg:px-20 xl:px-40">
      <div>
        <p className="text-2xl lg:text-3xl xl:text-3xl mb-3">
          Subscribe to our Newsletter
        </p>
        <p className="text-sm text-gray-400 mb-3">
          Subscribe to receive updates from our shop, including new products,
          blogs and upcoming sale.
        </p>
      </div>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          setError("");
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const newsdiv = document.getElementById("newsform");
            const errors = {};
            setError(null);
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              setError("Invalid email address");
            }
            const isFormValidated = onValidated({ EMAIL: email });
            newsdiv.style.display = "none";
            setSubmitting(false);
            return (
              errors && email && email.indexOf("@") > -1 && isFormValidated
            );
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form onChange={handleOnChange}>
            <div className="flex justify-center items-center">
              <div
                id="newsform"
                className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row"
              >
                <Field
                  className="border border-gray-700 py-2 px-4"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
                <button
                  className="bg-gray-700 text-white py-2 px-4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            <ErrorMessage name="email" component="div" />
            <div className="flex justify-center min-h-42px">
              {"sending" === status ? (
                 <div
                 className="inline-flex items-center px-4 py-2 font-semibold text-sm text-gray-70 transition duration-150"
               >
                 <svg
                   className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-700"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                 >
                   <circle
                     className="opacity-25"
                     cx="12"
                     cy="12"
                     r="10"
                     stroke="currentColor"
                     strokeWidth="4"
                   ></circle>
                   <path
                     className="opacity-75"
                     fill="currentColor"
                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                   ></path>
                 </svg>
                 PLEASE WAIT...
               </div>
              ) : null}
              {"error" === status || error ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: error || getMessage(message),
                  }}
                />
              ) : null}
              {"success" === status && "error" !== status && !error && (
                <div
                  className="p-8 text-center text-sm text-gray-700 bg-gray-50 border"
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
