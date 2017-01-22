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
      ],
      address: {
        street: '2130 Mountain Grove Ave',
        city: 'Burlington',
        prov: 'ON',
        postal: 'L7P 2J3'
      },
      contact: {
        phone: '(905) 331-5344',
        email: 'cmac.burl.north@sympatico.ca'
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Header contact={this.state.contact} />
        <Nav pages={this.state.pages} />
        {this.props.children}
      </div>
    )
  }
}

export default App