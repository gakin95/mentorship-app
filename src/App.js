import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleContainer from './Components/SimpleContainer';
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import SignIn from './Components/logIn';
import SignUpMentee from './Components/signUpMentee';
import SignUPMentor from './Components/signUpMentor';
import MaterialUIPickers from './Components/DatePicker'
import Message from './Components/chat'
import Tita from './Components/tita'
import FeedBack from './Components/FeedBack'
import MeetingReport from './Components/MeetingReport'
import Report from './Components/Report'
import Mentors from './Components/Mentor'
import ViewRequest from './Components/ViewRequest'
import Profile from './Components/Profile'
import Schedule from './Components/Schedule'
import IncomingRequest from './Components/inComingRequest'
import PageNotFound from './Components/NotFound'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={SimpleContainer} />
          <Route  path="/login" component={SignIn} />
          <Route  path="/signUP" component={SignUpMentee} />
          <Route  path="/sign" component={SignUPMentor} />
          <Route  path="/message" component={Message} />
          <Route  path="/tita" component={Tita} />
          <Route  path="/meeting" component={MeetingReport} />
          <Route  path="/mentors" component={Mentors} />
          <Route  path="/feedback" component={FeedBack} />
          <Route  path="/report" component={Report} />
          <Route  path="/request" component={ViewRequest} />
          <Route  path="/profile" component={Profile} />
          <Route  path="/schedule" component={Schedule} />
          <Route  path="/inComingRequest" component={IncomingRequest} />
          <Route  component={PageNotFound} />
        </Switch>
      </Router>
     
    </React.Fragment>
  );
}

export default App;
