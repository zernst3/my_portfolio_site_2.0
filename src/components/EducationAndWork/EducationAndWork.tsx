import React from "react";
import "./EducationAndWork.css";
import { motion } from "framer-motion";
import { Close } from "../Close/Close";

export const EducationAndWork: React.FC<any> = ({
  pageTransition,
  pageVariants,
}) => {
  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="EducationAndWorkContainer">
        <div id="EducationAndWorkInnerContainer">
          <h1>Education And Work</h1>
          <div className="Info">
            <h2>Work Experience</h2>
            <div className="FlexRow">
              <div className="Block">
                <h4>Trusight Solutions - Remote</h4>
                <p>Associate Cloud Developer - June, 2022 - Present</p>
                <p>
                  Application Support Engineer - February, 2021 – June, 2022
                </p>
                <p>
                  • Provide high-level application support for internal business
                  users and external clients
                  <br />
                  • Develop new features in backend and frontend application
                  using scrum methodology
                  <br />
                  • Develop a separate support ui application for internal
                  business users to utilize
                  <br />
                  &nbsp;&nbsp; - Created to give business users ability to
                  perform tasks traditionally done by support team
                  <br />
                  • Create scripts to automate common support tasks
                  <br />
                  • Investigate and debug issues related to the applications
                  used
                  <br />
                  • Perform quality control and testing of in-progress tasks and
                  new features
                  <br />• Manage application configurations in application
                  resources.
                </p>
              </div>
              <div className="Block">
                <h4>
                  Boy Scouts of America, Patriots' Path Council - Morris Plains,
                  NJ
                </h4>
                <p>Senior Fundraising Manager - March, 2019 – August, 2020</p>
                <p>Fundraising Specialist - September, 2017 – March, 2019</p>
                <p>
                  • Responsible for support of approximately 40 annual
                  high-profile fundraising events
                  <br />
                  • Participated in the hiring process to interview, train &
                  develop a new specialist
                  <br />
                  • Supervised and mentored the Fundraising Specialist
                  <br />• Worked with Accounting and Financial systems to manage
                  ~$1.7 million in annual revenue.
                </p>
              </div>
            </div>
            <h2>Education and Certifications</h2>
            <div className="FlexRow Education">
              <div className="Block">
                <h4>Web Development</h4>
                <p>FullStack Academy – December 2020</p>
              </div>
              <div className="Block">
                <h4>B.S., Public and Non-Profit Administration</h4>
                <p>Rutgers University, Newark NJ</p>
                <p>Summa Cum Laude – January 2018</p>
              </div>
              <div className="Block">
                <h4>Introduction to Computer Science</h4>
                <p>CS50, Harvard University – June 2020</p>
              </div>
              <div className="Block">
                <h4>Microsoft Azure Fundamentals Certification</h4>
                <p>
                  Issued June, 2022 -{" "}
                  <a
                    href="https://www.credly.com/badges/16c63be7-621b-489f-a475-0a740c997b28?source=linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Credential ID 993055840
                  </a>
                </p>
              </div>
            </div>
          </div>

          <ul></ul>
        </div>
        <Close />
      </div>
    </motion.div>
  );
};

export default EducationAndWork;
