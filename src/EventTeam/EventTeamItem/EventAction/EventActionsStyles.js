import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => ({
  zeroPadding: {
    padding: 0,
    "&:last-child": {
      padding: 0
    }
  },
  box: {
    borderRadius: "0.3125rem",
    background: "#D8D8D8",
    float: "left",
    padding: "0.8125rem",
    margin: "14.5px 0.6rem",
    lineHeight: "3.125rem",
    top: "3.125rem"
  },
  itemLeft: {
    float: "left"
  },
  itemRight: {
    float: "right"
  },
  halfWidth: {
    width: "50%"
  },
  itemName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#494949",
    "root":{
      marginTop: "12px"
    }
  },
  itemEmail: {
    fontSize: 11,
    color: "#A7A7A7",
    "root":{
      marginTop: 0
    }
  },
  fullWidth: {
    width: "100%",
    overflow: "hidden"
  },
  memberDetail: {
    fontWeight: "400",
    color: "darkgrey",
    textAlign: "right",
    fontSize: "small"
  },
  member: {
    lineHeight: "3.125rem"
  },
  expand: {
    transform: "rotate(-90deg)",
    color: "#00CC83",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(0deg)"
  }
}));
