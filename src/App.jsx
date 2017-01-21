import React, {Component} from 'react'
import Nav from './Nav.jsx'
import Header from './Header.jsx'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
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
      <div className="container">
        <Header />
        <Nav pages={this.state.pages} />
        {this.props.children}
      </div>
    )
  }
}

export default App