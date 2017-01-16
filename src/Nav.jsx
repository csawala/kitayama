import React, {Component} from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <img src="../build/CMACcrest.png" className="cmac-crest" />
        <h1>CMAC Kita Yama Dojo</h1>
        <img src="../build/CMACfist.png" className="cmac-fist"/>
      </div>
    )
  }
}

export default Nav