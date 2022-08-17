import React, { useState } from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion";
import { Close } from "../Close/Close";
import select from "../../sounds/select.mp3";

const Summary: React.FC<any> = () => (
  <div>
    <p>
      I am a determined and focused software and cloud developer with an
      attention to detail and a passion for improving my skills. My education
      began with self-study of the CS50 Introduction to Computer Science course
      offered by Harvard University. I continued with additional self-study and
      certification from FullStack Academy in Web Development.
    </p>

    <br />
    
    <p>
      My career started with Trusight Solutions, starting as an Application
      Support Engineer and later promoted to Associate Cloud Developer. Through
      these experiences, I have developed a greater understanding of programming
      and development. I am continually seeking opportunities to become
      proficient with new technologies.
    </p>
  </div>
);

const Skills: React.FC<any> = () => (
  <div>
    <div className="technologiesContainer">
      <div className="technologies">
        <div className="technology">
          <h3>Front-End:</h3>
          <div>
            <img
              src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
              alt="HTML 5"
            />
            <img
              src="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png"
              alt="CSS 3"
            />
            <img
              style={{ margin: "0px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="React"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              alt="Redux"
            />
          </div>
        </div>

        <div className="technology">
          <h3>Back-End:</h3>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
              alt="node.js"
            />
            <img
              className="technologyBackground"
              src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"
              alt="express.js"
            />
            <img
              className="technologyBackground"
              src="https://cdn.iconscout.com/icon/free/png-256/microsoft-dot-net-1-1175179.png"
              alt="Dotnet"
            />
          </div>
        </div>

        <div className="technology">
          <h3>Database:</h3>
          <div>
            <img
              className="technologyBackground"
              src="https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-sql-data-database-512.png"
              alt="SQL"
            />
            <img
              className="technologyBackground"
              src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
              alt="mongoDB"
            />
          </div>
        </div>

        <div className="technology">
          <h3>Languages:</h3>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
              alt="JavaScript"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
              alt="TypeScript"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
              alt="Python"
            />
            <img
              src="https://iconape.com/wp-content/png_logo_vector/c.png"
              alt="C#"
            />
          </div>
        </div>

        <div className="technology">
          <h3>Operating Systems:</h3>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Windows_logo_-_2012.png/700px-Windows_logo_-_2012.png"
              alt="Windows"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1200px-UbuntuCoF.svg.png"
              alt="Ubuntu"
            />
            <img
              src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-512.png"
              alt="Macintosh"
            />
          </div>
        </div>

        <div className="technology">
          <h3>Other:</h3>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
              alt="Microsoft Azure"
            />
            <img
              style={{ padding: "0" }}
              className="technologyBackground"
              src="https://www.seerene.com/hubfs/agile%20SOFTWARE%20DEVELOPMENT.svg"
              alt="Agile Project Management"
            />
            <img
              src="https://media.prod.mdn.mozit.cloud/attachments/2019/06/14/16742/4a5f228a878fe1e8de5213bdb599eeef/pwa.png"
              alt="Progressive Web Apps"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MoreDetails: React.FC<any> = () => (
  <div>
    <p>
      Starting in January 2020, I began my journey in web development through
      youtube as well as the Udemy course on this subject created by Colt
      Steele. By this point I began to understand the fundamentals of HTML and
      CSS development. Afterwards, I had learned about the acclaimed CS50 course
      offered by Harvard online and began to study the fundamentals of
      programming in C, as well as some Python, Flask and MySQL.
    </p>

    <br />

    <p>
      As I came to the final stage of CS50, I decided to complete my final
      project by continuing my studies through the Udemy course mentioned
      before. By utilizing what I learned in that course, I completed my final
      project for CS50 (as well as my first major full-stack project); details
      on this can be found in my projects page.
    </p>

    <br />

    <p>
      By the end of this first phase of my self-study, I developed a love for
      programming and creating things that people can use. It was at this point
      that I decided to accelerate my study, and diversify the technologies I
      was learning. I had learned about FullStack Academy through much online
      research in academic options for myself. It was during the summer that I
      took the leap and applied; by August, I was accepted and had begun my
      rigorous journey through this program. While attending this school, I
      delved much deeper into web development technologies including: Node,
      Express, PostgresSQL, React, Redux and much more.
    </p>

    <br />

    <p>
      After completing certification from FullStack Academy, I began working for
      Trusight Solutions as an Application Support Engineer. Initially, the
      responsibilities for this position were to support the web application
      used by internal and external users. The range of support required was
      from password-resets to api configuration in Azure. Over time, I developed
      my skills further and began scripting support tasks and developing an
      internal support application to give internal users the ability to
      self-service some of the most common support requests. In addition, my
      responsibilities began to include development work on the front-end and
      back-end of our internal application, as well as some supporting
      functions. I was then promoted to Associate Cloud Developer to better
      reflect the responsibilities that my position evolved to envelope.
    </p>

    <br />

    <p>
      In June of 2022, I took the AZ900 Microsoft Azure Fundamentals
      Certification and passed the exam.
    </p>
  </div>
);

const sections = [
  { header: "Summary", Component: Summary },
  { header: "Skills", Component: Skills },
  { header: "More Details", Component: MoreDetails },
];

export const AboutMe: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [expanded, setExpanded] = useState<false | number>(0);
  const selectAudio = new Audio(select);

  selectAudio.volume = 0.45;

  const playSelect = () => {
    selectAudio.play();
  };

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="AboutMeContainer">
        <div id="AboutMeInnerContainer">
          <h1>About</h1>
          <div id="AboutMe">
            <div className="me">
              <img src="/Me8 Transparent Background.png" alt="Me" />
            </div>
            <div className="infoContainer">
              <div className="info">
                {sections.map((section, idx) => (
                  <div onClick={playSelect}>
                    <Accordion
                      header={section.header}
                      key={idx}
                      idx={idx}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      Component={section.Component}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
