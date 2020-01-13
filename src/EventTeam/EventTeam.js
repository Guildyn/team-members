import React from "react";
import { List, Grid } from "@material-ui/core";
import Actions from "./EventTeamItem/EventAction/EventActions";
import Extention from "./EventTeamItem/EventCollapse/EventCollapse";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { styles } from "./TeamStyles";

class EventTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: null
    };
  }

  showAddress = id => {
    const expanded = this.state.expanded === id ? null : id;
    this.setState({ expanded });
  };

  render() {
    const { data, classes } = this.props;
    const { expanded } = this.state;
    const Teams = () => {
      return data.map(team => {
        return (
          <Grid
            key={team.id}
            className={classes.itemRoot}
          >
            <Actions
              team={team}
              showAddress={this.showAddress}
              expanded={team.id === expanded}
            />
            <Extention team={team} expanded={team.id === expanded} />
          </Grid>
        );
      });
    };

    return <List disablePadding={true} className={classes.container}>{<Teams />}</List>;
  }
}

EventTeam.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array
};

export default withStyles(styles)(EventTeam);