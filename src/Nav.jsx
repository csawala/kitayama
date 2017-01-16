import React, {Component} from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title-bar">
          <img src="../build/CMACcrest.png" className="cmac-crest" />
          <h1>CMAC Kita Yama Dojo</h1>
          <img src="../build/CMACfist.png" className="cmac-fist"/>
        </div>

        <div className="button-bar">
          <a href='#' className="navbutton" onClick={console.log('cmac')}>
            CMAC
          </a>
          <a href='#' className="navbutton" onClick={console.log('instructor')}>
            Instructor
          </a>
          <a href='#' className="navbutton" onClick={console.log('schedule')}>
            Schedule
          </a>
          <a href='#' className="navbutton" onClick={console.log('events')}>
            Events
          </a>
          <a href='#' className="navbutton" onClick={console.log('contact')}>
            Contact us
          </a>
        </div>
      </div>
    )
  }
}

export default Nav