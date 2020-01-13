import React from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import ExpandIcon from '@material-ui/icons/ExpandMoreRounded';
import { ListItemText, ListItem, Grid, IconButton } from "@material-ui/core";
import { styles } from "./EventActionsStyles";

const EventActions = ({ team, showAddress, expanded }) => {
  const classes = styles();
  return (
    <Grid container spacing={1}>
      <ListItem button disableRipple>
        <Grid
          item
          className={`${classes.itemLeft} ${classes.halfWidth}`}
          xs={6}
        >
          <Grid item className={classes.box}></Grid>
          <Grid item className={classes.item}>
            <ListItemText
              disableTypography
              primary={team.name}
              className={classes.itemName}
            />
            <ListItemText
              disableTypography
              secondary={team.email}
              className={classes.itemEmail}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} className={`${classes.itemRight} ${classes.halfWidth}`}>
          <ListItem className={classes.fullWidth}>
            <ListItemText
              disableTypography
              align="right"
              secondary="Member"
              className={classes.memberDetail}
            />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={() => showAddress(team.id)}
            >
              <ExpandIcon fontSize={'inherit'} />
            </IconButton>
          </ListItem>
        </Grid>
      </ListItem>
    </Grid>
  );
};

EventActions.propTypes = {
  team: PropTypes.object,
  showAddress: PropTypes.func,
  expanded: PropTypes.bool
}

export default EventActions;
