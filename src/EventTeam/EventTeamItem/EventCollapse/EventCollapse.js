import React from "react";
import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  ListItem,
  Typography
} from "@material-ui/core";
import { styles } from "./EventCollapseStyles";

const EventCollapse = ({ team, expanded }) => {
  const classes = styles();
  return (
    <ListItem divider={false} className={classes.zero}>
      <Collapse
        className={classes.fullWidth}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Box
          textAlign="right"
          fontSize={13}
          lineHeight={"1.5625rem"}
          className={classes.info}
        >
          <Typography component="span">
            <Box component="span" fontSize={13} m={1} className={classes.locationText}>
              Address:
            </Box>
            <Box component="span" fontSize={13} m={0} className={classes.color}>
              {team.address.street}, {team.address.suite}, {team.address.city},{" "}
              {team.address.zipcode}
            </Box>
          </Typography>
        </Box>
      </Collapse>
    </ListItem>
  );
};

EventCollapse.propTypes = {
  team: PropTypes.object,
  expanded: PropTypes.bool
}

export default EventCollapse;
