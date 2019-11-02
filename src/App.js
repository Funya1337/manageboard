import React from 'react';
import { connect } from 'react-redux';
import AppMenu from "./components/app-menu/app-menu";
import Adminpage from "./containers/adminpage/adminpage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/layout/layout';

function addAppMenu (Component) {
  return (
    <Layout>
      <Component/>
    </Layout>
  )
}

class App extends React.Component {
  state = {
    userName: 'Boris Britva'
  }

  changeName = (userName) => {
    this.setState({userName})
  } 

  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <Router>
          <AppMenu userName={this.state.userName}/>
          <Route exact path="/"/>
          <Route exact path='/admin' component={() => <Adminpage userName={this.state.userName} onChangeName={this.changeName}/>}/>
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
