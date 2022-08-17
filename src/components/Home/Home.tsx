import React, { useState } from "react";
import "./Home.css";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useStyles } from "./NavbarStyles";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import { AssignmentInd, Apps, ContactMail } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AssignmentIcon from "@material-ui/icons/Assignment";
import select from "../../sounds/select.mp3";
import woosh3 from "../../sounds/woosh3.mp3";

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
    listIcon: <AssignmentIcon />,
    listText: "Education and Work",
    link: "/educationandwork",
  },
  {
    listIcon: <Apps />,
    listText: "Personal Projects",
    link: "/personalprojects",
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
  const [links, setlinks] = useState(false);

  let playWoosh = true;

  const selectAudio = new Audio(select);

  selectAudio.volume = 0.45;

  const playSelect = () => {
    
    selectAudio.play();
  };

  const playWoosh3 = () => {
    const woosh3Audio = new Audio(woosh3);
    woosh3Audio.volume = 0.25;
    playWoosh && woosh3Audio.play();
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setlinks(true);
  };

  const handleClose = () => {
    setlinks(false);
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
                    className={"navbarItem"}
                    to={item.link}
                    key={idx}
                    onClick={() => {
                      playWoosh = false;
                      playSelect()
                    }}
                    onMouseEnter={() => setTimeout(playWoosh3,5)}
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

            <div className="links">
              <div className={"navbarItem"}>
                <ListItem>
                  <IconButton onClick={(event) => {
                    playWoosh = false;
                    handleClick(event)
                  }
                    } value="links">
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={"Links"}
                      onClick={() => {
                        playWoosh = false;
                        playSelect()
                      }}
                      onMouseEnter={() => setTimeout(playWoosh3, 5)}
                    />
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
                    open={links}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <a
                        className={classes.menuLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://1drv.ms/b/s!AoDkHshjwIQimErYucn_heK_Homt"
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
                />
              </h1>
              <h3>
                <Typed
                  strings={[
                    "Cloud Developer",
                    "Microsoft Azure Certified",
                    "Javascript, C# and Python",
                    "React, Node and Dotnet",
                    "SQL and MongoDB",
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
