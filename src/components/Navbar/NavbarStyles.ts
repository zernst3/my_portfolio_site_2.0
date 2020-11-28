import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBarStyles: {
    backgroundColor: "rgba(20, 20, 20, 0.1)",
    height: "65px",
  },
  toolbarStyles: {
    height: "65px",
    "& h4": {
      color: "rgb(240, 240, 240)",
    },
  },
  listItem: {
    color: "rgb(240, 240, 240)",
  },
  toggleSlider: {
    width: "50px",
    marginLeft: "auto",
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
    backgroundColor: "rgba(15, 12, 46, 1)",
    border: "1px solid rgb(240, 240, 240)",
    borderRadius: "10px",
  },
  navbarActive: {
    borderBottom: "1px solid rgb(240, 240, 240)",
  },
  navbarContainer: {
    margin: "0em 2%",
    marginLeft: "auto",
    display: "none",
    justifyContent: "space-between",
    width: "20%",
    minWidth: "700px",
    [theme.breakpoints.up(1050)]: {
      display: "flex",
    },

    "& a": {
      color: "rgb(240, 240, 240)",
      textDecoration: "none",
      "&:hover": {
        borderBottom: "1px solid rgb(240, 240, 240)",
      },
      "& span": {
        fontSize: "1.3em",
      },
    },
  },
}));
