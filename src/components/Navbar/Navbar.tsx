import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";

import {
  Dehaze,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import { useStyles } from "./NavbarStyles";

interface listItem {
  listIcon: any;
  listText: string;
  link: string;
}

const menuItems: Array<listItem> = [
  {
    listIcon: <Home />,
    listText: "Home",
    link: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About Me",
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

export const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    if (event.currentTarget.value === "mobileMenu") {
      setMobileMenu(true);
    } else {
      setMoreInfo(true);
    }
  };

  const handleClose = () => {
    setMobileMenu(false);
    setMoreInfo(false);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box component="nav" className={classes.Nav}>
        <AppBar position="relative" className={classes.appBarStyles}>
          <Toolbar className={classes.toolbarStyles}>
            {/* Desktop Navbar */}
            <div className={classes.navbarContainer}>
              {menuItems.map((item, idx) => {
                return (
                  <NavLink
                    exact={item.link !== "/myprojects"}
                    activeClassName={classes.navbarActive}
                    to={item.link}
                    key={idx}
                  >
                    <ListItem>
                      <ListItemIcon className={classes.listItem}>
                        {item.listIcon}
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItem}
                        primary={item.listText}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Navbar */}
            <div className={classes.toggleSlider}>
              <IconButton
                aria-controls="simple-menu"
                className={classes.toggleSlider}
                onClick={handleClick}
                value="mobileMenu"
              >
                <ListItemIcon className={classes.toggleButton}>
                  <Dehaze />
                </ListItemIcon>

                <ListItemText
                  className={classes.toggleButton}
                  primary={"Nav"}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                PaperProps={{
                  style: {
                    backgroundColor: "transparent",
                  },
                }}
                keepMounted
                open={mobileMenu}
                onClose={handleClose}
              >
                {menuItems.map((item, idx) => {
                  return (
                    <MenuItem key={idx} onClick={handleClose}>
                      <NavLink
                        exact
                        className={classes.menuLink}
                        activeClassName={classes.sidebarActive}
                        to={item.link}
                      >
                        <div className="MuiListItem-root MuiListItem-gutters">
                          <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItem}
                            primary={item.listText}
                          />
                        </div>
                      </NavLink>
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>

            <div className={classes.moreInfoContainer}>
              <ListItem>
                <IconButton onClick={handleClick} value="moreInfo">
                  <ListItemIcon className={classes.toggleButton}>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.toggleButton}
                    primary={"More Info"}
                  />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  PaperProps={{
                    style: {
                      backgroundColor: "transparent",
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
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
