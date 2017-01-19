// Application entrypoint.

// Load up the application styles
require("../styles/application.scss")

// Render the top-level React component
import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Component imports
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Events from './Events.jsx'
import Programs from './Programs.jsx'
import Schedule from './Schedule.jsx'
import Cmac from './Cmac.jsx'
import Contact from './Contact.jsx'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/events" component={Events}/>
      <Route path="/programs" component={Programs}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/cmac" component={Cmac}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
  , document.getElementById('react-root')
)