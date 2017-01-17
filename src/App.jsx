import React, {Component} from 'react'
import SiteContainer from './SiteContainer.jsx'
import Header from './Header.jsx'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SiteContainer />
      </div>
    )
  }
}
export default App