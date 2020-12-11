import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  listItem: {
    color: "rgb(240, 240, 240)",
  },
  menuLink: {
    textDecoration: "none",
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
