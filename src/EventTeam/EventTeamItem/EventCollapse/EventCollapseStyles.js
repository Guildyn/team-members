import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles({
  zero: {
    padding: 0,
    "&:last-child": {
      padding: 0
    }
  },
  fullWidth: {
    width: "100%",
    overflow: "hidden"
  },
  info: {
    backgroundColor: "#F8F8F8",
    paddingRight: "2.5rem"
  },
  locationText: {
    color: "#A7A7A7",
    fontWeight: "700"
  },
  color: {
    color: "#AFAFAF"
  }
});
