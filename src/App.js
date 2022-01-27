import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  apiKey = "be962abb5ca8445694c8a2fa1954b31a"
  state = ({
    progress: 0
  });
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#2d81ff'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact key="general" path="/"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact key="Bussiness" path="/Bussiness"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Bussiness" /></Route>
            <Route exact key="Sports" path="/Sports"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Sports" /></Route>
            <Route exact key="Entertainment" path="/Entertainment"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Entertainment" /></Route>
            <Route exact key="Health" path="/Health"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Health" /></Route>
            <Route exact key="Technology" path="/Technology"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Technology" /></Route>
            <Route exact key="Science" path="/Science"><News apiKey={this.apiKey} setprogress={this.setprogress} pageSize={this.pageSize} country="in" category="Science" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
