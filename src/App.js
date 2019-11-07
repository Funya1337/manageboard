import React from "react";
import { connect } from "react-redux";
import AppMenu from "./components/app-menu/app-menu";
import Aboutuser from "./containers/aboutuser/aboutuser";
import Comment from "./containers/comment/comment";
import Aboutme from "./containers/aboutme/aboutme";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <Router>
          <AppMenu />
          <Route exact path="/" />
          <Route exact path="/aboutuser" component={() => <Aboutuser />} />
          <Route exact path="/comment" component={() => <Comment />} />
          <Route exact path="/aboutme" component={() => <Aboutme />} />
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
