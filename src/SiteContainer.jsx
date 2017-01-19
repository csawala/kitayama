import React, {Component} from 'react'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Events from './Events.jsx'
import Programs from './Programs.jsx'
import Schedule from './Schedule.jsx'
import Cmac from './Cmac.jsx'

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


    return (
      <section>
        <nav className="navbar">
          <Nav pages={this.state.pages} />
        </nav>
        <div className="page-render">
          <About />
        </div>
      </section>
    )
  }
}

export default SiteContainer