import React from 'react';
import { connect } from 'react-redux';
import AppMenu from "./components/app-menu/app-menu";
import Adminpage from "./containers/adminpage/adminpage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <Router>
          <AppMenu />
          <Route exact path="/"/>
          <Route exact path='/admin' component={Adminpage}/>
        </Router>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
