import React, { useState } from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import axios from "axios";

export const ContactMe: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    setLoading(true);
    console.log(email);
    const { data } = await axios.request({
      method: "POST",
      url: `https://zernst-handleemailserver.herokuapp.com/`,
      data: {
        email: email,
        name: name,
        subject: subject,
        message: message,
      },
    });
    console.log(data);
    if (data === "Success") {
      setLoading(false);
      setThankYou(true);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="ContactMeContainer">
        <div id="ContactMe">
          {!thankYou && !error && !loading ? (
            <React.Fragment>
              <h1>Contact Me</h1>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(evt: any) => {
                      setEmail(evt.target.value);
                    }}
                  />

                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(evt: any) => {
                      setName(evt.target.value);
                    }}
                  />

                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(evt: any) => {
                      setSubject(evt.target.value);
                    }}
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                    value={message}
                    rows={4}
                    id="message"
                    onChange={(evt: any) => {
                      setMessage(evt.target.value);
                    }}
                  ></textarea>

                  <button color="primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <h3>
                Or contact me directly at:{" "}
                <a href="mailto:zernst3@live.com">zernst3@live.com</a>
              </h3>
            </React.Fragment>
          ) : loading ? (
            <h1>Sending Email...</h1>
          ) : thankYou ? (
            <h1>Thank you for your message!</h1>
          ) : (
            <h1>There has been an error</h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};
