import React, { Component, Fragment } from "react";
import EventTeam from "./EventTeam/EventTeam";
import SearchPeople from "./Search/SearchPeople";
import { connect } from "react-redux";
import { userDataFetch } from "./actions/actionCreators";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./AppStyles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.ref = React.createRef();
  };

  componentDidMount() {
    this.props.userFetch("http://jsonplaceholder.typicode.com/users");
  };

  onChangeHandler = event => {
    this.setState({ user: event.target.value });
  };

  render() {
    const { classes, userData, error, loading } = this.props;
    const { user } = this.state;

    const userFiltered = userData.filter(userList => {
      return userList.name.toLowerCase().indexOf(user.toLowerCase()) !== -1;
    });

    const userNumber = userFiltered.length;

    if (error) {
      return <div>Sorry! There was a error during loading.</div>;
    };
    if (loading) {
      return <div>Loading...</div>;
    };

    return (
      <Fragment>
        <div className={classes.title}>
          <div className={classes.titleBody}>
            <h3>Team Members</h3>
          </div>
        </div>
        <div className={classes.body}>
          <SearchPeople
            value={user}
            onChange={this.onChangeHandler}
            counter={userNumber}
            placeholder="Find by name"
            ref={this.ref}
            autoFocus={this.ref.current && true}
          />
          <Card>
            <EventTeam data={userFiltered} />
          </Card>
        </div>
      </Fragment>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.object
};

const withApp = withStyles(styles)(App);

const mapStateToProps = state => {
  return {
    userData: state.userData,
    userFailed: state.userFailed,
    userLoading: state.userLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userFetch: url => dispatch(userDataFetch(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApp);