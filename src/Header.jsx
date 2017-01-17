import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header className="title-bar">
        <img src="../build/CMACcrest.png" className="cmac-crest" />
        <h1>CMAC Kita Yama Dojo</h1>
        <img src="../build/CMACfist.png" className="cmac-fist"/>
      </header>
    )
  }
}

export default Header