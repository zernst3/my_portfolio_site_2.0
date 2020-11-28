import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appBarStyles}>
          <Toolbar className={classes.toolbarStyles}>
            <Typography variant="h4">Portfolio</Typography>

            <div className={classes.navbarContainer}>
              {menuItems.map((item, idx) => {
                return (
                  <NavLink
                    exact
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

            <div className={classes.toggleSlider}>
              <IconButton
                aria-controls="simple-menu"
                className={classes.toggleSlider}
                onClick={handleClick}
              >
                <Dehaze />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                PaperProps={{
                  style: {
                    backgroundColor: "transparent",
                  },
                }}
                keepMounted
                open={Boolean(anchorEl)}
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
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
