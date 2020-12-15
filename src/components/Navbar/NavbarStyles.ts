import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Nav: {
    position: "relative",
  },
  appBarStyles: {
    backgroundColor: "rgba(41, 70, 70, 0.5)",
    height: "65px",
  },
  toolbarStyles: {
    height: "65px",
    "& h4": {
      color: "rgb(240, 240, 240)",
    },
    "& button": {
      borderRadius: "0px",
      borderBottom: "1px solid transparent",
    },
    "& button:hover": {
      background:
        "linear-gradient(90deg, rgba(194, 167, 46, 0.7) 0%, rgba(189, 157, 86, 0.5) 51%, rgba(179, 164, 96, 0.3) 100%)",
      borderRadius: "5px",
    },
  },
  listItem: {
    color: "rgb(240, 240, 240)",
  },
  toggleSlider: {
    color: "rgba(255, 255, 255, 1)",
    [theme.breakpoints.up(1050)]: {
      display: "none",
    },
  },
  menuLink: {
    textDecoration: "none",
  },
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  sidebarActive: {
    background:
      "linear-gradient(90deg, rgba(194, 167, 46, 0.7) 0%, rgba(189, 157, 86, 0.5) 51%, rgba(179, 164, 96, 0.3) 100%)",
    borderRadius: "5px",
  },
  navbarActive: {
    background:
      "linear-gradient(90deg, rgba(194, 167, 46, 0.7) 0%, rgba(189, 157, 86, 0.5) 51%, rgba(179, 164, 96, 0.3) 100%)",
    borderRadius: "5px",
  },
  navbarContainer: {
    margin: "0em 2%",
    display: "none",
    justifyContent: "space-between",
    width: "20%",
    minWidth: "750px",
    [theme.breakpoints.up(1050)]: {
      display: "flex",
    },

    "& a": {
      color: "rgb(240, 240, 240)",
      textDecoration: "none",
      "&:hover": {
        background:
          "linear-gradient(90deg, rgba(194, 167, 46, 0.7) 0%, rgba(189, 157, 86, 0.5) 51%, rgba(179, 164, 96, 0.3) 100%)",
        borderRadius: "5px",
      },
      "& span": {
        fontSize: "1.3em",
      },
    },
  },
  moreInfoContainer: {
    marginLeft: "auto",
  },
  toggleButton: {
    color: "rgb(240, 240, 240)",
    minWidth: "0px",
    margin: "0px 5px",

    "& span": {
      fontSize: "0.8em",
      color: "rgb(240, 240, 240)",
    },
  },
}));
