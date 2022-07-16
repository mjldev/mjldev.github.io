// import { useState } from "react";
// import { sanitize } from "../Utils/Miscellaneous";
// import Loading from "../Loading/Loading";

// const NewsletterForm = ({ status, message, onValidated }) => {
//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState(null);

//   /**
//    * Handle form submit.
//    *
//    * @return {{value}|*|boolean|null}
//    */
//   const handleFormSubmit = () => {
//     setError(null);

//     if (!email) {
//       setError("Please enter a valid email address");
//       return null;
//     }

//     const isFormValidated = onValidated({ EMAIL: email });

//     // On success return true
//     return email && email.indexOf("@") > -1 && isFormValidated;
//   };

//   /**
//    * Handle Input Key Event.
//    *
//    * @param event
//    */
//   const handleInputKeyEvent = (event) => {
//     setError(null);
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       handleFormSubmit();
//     }
//   };

//   /**
//    * Extract message from string.
//    *
//    * @param {String} message
//    * @return {null|*}
//    */
//   const getMessage = (message) => {
//     if (!message) {
//       return null;
//     }
//     const result = message?.split("-") ?? null;
//     if ("0" !== result?.[0]?.trim()) {
//       return sanitize(message);
//     }
//     const formattedMessage = result?.[1]?.trim() ?? null;
//     return formattedMessage ? sanitize(formattedMessage) : null;
//   };

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <p className="text-2xl lg:text-3xl xl:text-3xl mb-3">
//         Subscribe to Newsletter
//       </p>
//       <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center">
//         <input
//           onChange={(event) => setEmail(event?.target?.value ?? "")}
//           type="email"
//           placeholder="Enter Email Address"
//           className="appearance-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-500 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
//           onKeyUp={(event) => handleInputKeyEvent(event)}
//         />
//         <button
//           className="cursor-pointer	text-white bg-gray-700 border-0 py-2 px-5 focus:outline-none hover:opacity-90"
//           onClick={handleFormSubmit}
//         >
//           Submit
//         </button>
//       </div>
//       <div className="min-h-42px">
//         {"sending" === status ? (
//           <Loading
//             showSpinner
//             message="Sending..."
//             contentColorClass="text-white"
//             hasVisibilityToggle={false}
//           />
//         ) : null}
//         {"error" === status || error ? (
//           <div
//             className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
//             role="alert"
//             dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
//           />
//         ) : null}
//         {"success" === status && "error" !== status && !error && (
//           <div
//             className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
//             role="alert"
//             dangerouslySetInnerHTML={{ __html: sanitize(message) }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsletterForm;
