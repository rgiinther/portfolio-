import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";

function Contact() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  //const [errorMessage, setErrorMessage] = useState('');
  //const { name, email, message } = formState;

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

    return (
        <section id="contact" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center">
          <UsersIcon className="w-10 inline-block mb-4" />
          <h1 data-testid="h1tag" className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Contact me</h1>
          </div>
        <div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="relative mb-4 text-center">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-8/12 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <div className="relative mb-4 text-center">
              <label htmlFor="email">Email address:</label>
              <input 
              type="email" 
              name="email" 
              className="w-8/12 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="relative mb-4 text-center">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message: 
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-9/12 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-center outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            </div>
            <div className='justify-center'>
            <button
            type="submit"
            className="mb-1.5 ml-2 text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
            Submit
          </button>
            </div>
            
          </form>
        </div>  
         
        </section>
      );
}

export default Contact;