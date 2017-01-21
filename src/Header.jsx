import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header className="title-bar">
        <img src="../build/CMACcrest.png" className="cmac-crest" />
        <div className="dojo-title">
          <h3>Canadian Martial Arts Centre</h3>
          <h1>Kita Yama Dojo</h1>
          <h5>Burlington North - Affiliate of Classical Martial Arts Centre</h5>
        </div>
        <img src="../build/CMACfist.png" className="cmac-fist"/>
      </header>
    )
  }
}

export default Header