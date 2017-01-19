import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'

import Nav from './Nav.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Events from './Events.jsx'
import Programs from './Programs.jsx'
import Schedule from './Schedule.jsx'
import Cmac from './Cmac.jsx'
import Contact from './Contact.jsx'

class SiteContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 'About',
      pages: [
        ['CMAC', 'cmac'],
        ['Programs', 'programs'],
        ['About', 'about'],
        ['Schedule', 'schedule'],
        ['Events', 'events'],
        ['Contact', 'contact']
      ]
    }
  }


  render() {
// switch needed for routing

    return (
      <section>
        <nav className="navbar">
          <Nav pages={this.state.pages} />
        </nav>
        <div className="page-render">

        </div>
      </section>
    )
  }
}

export default SiteContainer