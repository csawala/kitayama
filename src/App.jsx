import React, {Component} from 'react'
import Nav from './Nav.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <Nav />
        </nav>
      </div>
    )
  }
}
export default App