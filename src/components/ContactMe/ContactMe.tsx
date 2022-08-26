import React, { useState } from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Close } from "../Close/Close";
import select from "../../sounds/select.mp3";

import { PhoneAndroid, AlternateEmail } from "@material-ui/icons";

export const ContactMe: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectAudio = new Audio(select);

  selectAudio.volume = 0.75;

  const playSelect = () => {
    selectAudio.play();
  };

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
          <h1>Contact Me</h1>
          {!thankYou && !error && !loading ? (
            <React.Fragment>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    required
                    id="name"
                    type="text"
                    value={name}
                    onChange={(evt: any) => {
                      setName(evt.target.value);
                    }}
                  />

                  <label htmlFor="email">Your Email</label>
                  <input
                    required
                    id="email"
                    type="email"
                    value={email}
                    onChange={(evt: any) => {
                      setEmail(evt.target.value);
                    }}
                  />

                  <label htmlFor="subject">Subject</label>
                  <input
                    required
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(evt: any) => {
                      setSubject(evt.target.value);
                    }}
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                    required
                    value={message}
                    rows={4}
                    id="message"
                    onChange={(evt: any) => {
                      setMessage(evt.target.value);
                    }}
                  ></textarea>
                  <h4>*All fields are required</h4>
                  {email.length === 0 ||
                  name.length === 0 ||
                  subject.length === 0 ||
                  message.length === 0 ? (
                    <button
                      color="primary"
                      type="submit"
                      className={"disabled"}
                      disabled={true}
                    >
                      Submit
                    </button>
                  ) : (
                    <button color="primary" type="submit" onClick={playSelect}>
                      Submit
                    </button>
                  )}
                </form>
                <h3>
                  Or contact me directly at:
                  <a target="_blank" rel="noreferrer" href="Tel: 202-780-5495">
                    <PhoneAndroid /> (202) 780-5495
                  </a>
                  <a
                    href="mailto:zernst3@live.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AlternateEmail /> zernst3@live.com
                  </a>
                </h3>
              </div>
            </React.Fragment>
          ) : loading ? (
            <div className="page">
              <ThreeDots color="#F0F0F0" height={100} width={100} />
              <h2>Sending Email</h2>
              <ThreeDots color="#F0F0F0" height={100} width={100} />
            </div>
          ) : thankYou ? (
            <div className="page">
              <h2>Thank you for your message!</h2>
            </div>
          ) : (
            <div className="page">
              <h2>
                There has been an error, please contact me directly instead:
                <a target="_blank" rel="noreferrer" href="Tel: 202-780-5495">
                    <PhoneAndroid /> (202) 780-5495
                  </a>
                  <a
                    href="mailto:zernst3@live.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AlternateEmail /> zernst3@live.com
                  </a>
              </h2>
            </div>
          )}
        </div>
        <Close />
      </div>
    </motion.div>
  );
};

export default ContactMe;
