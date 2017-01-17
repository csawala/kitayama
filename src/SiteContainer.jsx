import React, {Component} from 'react'

class SiteContainer extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="button-bar">
          <a href='#' className="navbutton" onClick={console.log('cmac')}>
            CMAC
          </a>
          <a href='#' className="navbutton" onClick={console.log('programs')}>
            Programs
          </a>
          <a href='#' className="navbutton" onClick={console.log('instructor')}>
            About Us
          </a>
          <a href='#' className="navbutton" onClick={console.log('schedule')}>
            Schedule
          </a>
          <a href='#' className="navbutton" onClick={console.log('events')}>
            Events
          </a>
          <a href='#' className="navbutton" onClick={console.log('contact')}>
            Contact Us
          </a>
        </div>
      </nav>
    )
  }
}

export default SiteContainer