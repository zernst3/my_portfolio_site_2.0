import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";

export const AboutMe: React.FC<any> = ({ pageTransition, pageVariants }) => (
  <motion.div
    initial="initial"
    exit="out"
    animate="in"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div id="AboutMeContainer">
      <div id="AboutMe">
        <h1>About</h1>
        <div className="me">
          <img src="/Me3.png" alt="Me" />
        </div>
        <div>
          <p>
            I have been working on developing my skills as a web designer and
            developer since January, 2020. I am currently studying these skills
            and diversifying my education at FullStack Academy. There are many
            other resources I have used including: Harvard's CS50X, Udemy,
            Youtube and Stack Overflow. I am extremely passionate about this
            field, and determined to grow and learn more.
          </p>
        </div>

        <hr />

        <div>
          <p>Some of my skills include:</p>

          <div className="technologies">
            <img
              style={{ margin: "0px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="React"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              alt="Redux"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
              alt="node.js"
            />
            <img
              className="technologyBackground"
              src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/6b427/express-routing-logo.png"
              alt="express.js"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="PostgreSQL"
            />
            <img
              className="technologyBackground"
              src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
              alt="mongoDB"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
              alt="Typescript"
            />
            <img
              src="https://media.prod.mdn.mozit.cloud/attachments/2019/06/14/16742/4a5f228a878fe1e8de5213bdb599eeef/pwa.png"
              alt="Progressive Web Apps"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AboutMe;
