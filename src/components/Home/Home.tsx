import React, { useState } from "react";
import "./Home.css";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useStyles } from "./NavbarStyles";
import useSound from "use-sound";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import { Dehaze, AssignmentInd, Apps, ContactMail } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const woosh1 = require("../../sounds/woosh1.mp3");

interface listItem {
  listIcon: any;
  listText: string;
  link: string;
}

const menuItems: Array<listItem> = [
  {
    listIcon: <AssignmentInd />,
    listText: "About",
    link: "/aboutme",
  },
  {
    listIcon: <Apps />,
    listText: "My Projects",
    link: "/myprojects",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    link: "/contactme",
  },
];

export const Home: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);
  const [playWoosh1]: any = useSound("../../sounds/woosh1.mp3", {
    volume: 1.0,
  });

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setMoreInfo(true);
  };

  const handleClose = () => {
    setMoreInfo(false);
    setAnchorEl(null);
  };

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Home">
        <div className="content">
          <div className="menuContainer">
            <div className="pageLinks">
              {menuItems.map((item, idx) => {
                return (
                  <NavLink
                    exact={item.link !== "/myprojects"}
                    className={"navbarItem"}
                    activeClassName={"navbarActive"}
                    to={item.link}
                    key={idx}
                    onClick={playWoosh1}
                  >
                    <ListItem>
                      <ListItemIcon className={"listItem"}>
                        {item.listIcon}
                      </ListItemIcon>
                      <ListItemText
                        className={"listItem"}
                        primary={item.listText}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </div>

            <hr />

            <div className="moreInfo">
              <div className={"navbarItem"}>
                <ListItem>
                  <IconButton onClick={handleClick} value="moreInfo">
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={"More Info"} />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    PaperProps={{
                      style: {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(5px)",
                        borderRadius: "10px",
                      },
                    }}
                    keepMounted
                    open={moreInfo}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <a
                        className={classes.menuLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://1drv.ms/b/s!AoDkHshjwIQilzqXatrnw_x-R2ZO"
                      >
                        <div className="MuiListItem-root MuiListItem-gutters">
                          <ListItemIcon className={classes.listItem}>
                            <DescriptionIcon />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={"My Resume"}
                          />
                        </div>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        className={classes.menuLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/zernst3"
                      >
                        <div className="MuiListItem-root MuiListItem-gutters">
                          <ListItemIcon className={classes.listItem}>
                            <GitHubIcon />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={"My Github"}
                          />
                        </div>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        className={classes.menuLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/zernst3/"
                      >
                        <div className="MuiListItem-root MuiListItem-gutters">
                          <ListItemIcon className={classes.listItem}>
                            <LinkedInIcon />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={"My LinkedIn"}
                          />
                        </div>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        className={classes.menuLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://stackoverflow.com/users/3048047/zernst"
                      >
                        <div className="MuiListItem-root MuiListItem-gutters">
                          <ListItemIcon className={classes.listItem}>
                            <LinkIcon />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={"My Stack Overflow"}
                          />
                        </div>
                      </a>
                    </MenuItem>
                  </Menu>
                </ListItem>
              </div>
            </div>
          </div>

          <div className="textContainer">
            <div className="text">
              <h1>
                <Typed
                  strings={["Zachary Ernst"]}
                  typeSpeed={30}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h1>
              <h3>
                <Typed
                  strings={[
                    "Full-Stack Web Developer",
                    "React and Redux",
                    "Node and Express",
                    "PostgreSQL and MongoDB",
                    "and more...",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
