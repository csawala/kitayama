import React, {Component} from 'react'
import Nav from './Nav.jsx'
import Header from './Header.jsx'


class App extends Component {
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
      <div className="container">
        <Header />
        <section>
          <nav className="navbar">
            <Nav pages={this.state.pages} />
          </nav>
          <div className="page-render">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default App