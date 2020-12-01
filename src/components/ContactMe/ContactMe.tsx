import React, { useState } from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";

export const ContactMe: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setThankYou(true);
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
          {!thankYou ? (
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
            </React.Fragment>
          ) : (
            <h1>Thank you for your message!</h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};
