import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="button-bar">
        <IndexLink to='/' className="navbutton" activeClassName="active">Home</IndexLink>
        {
          this.props.pages.map((page) => {
            return <Link to={'/' + page[1]} key={page[1]} className="navbutton" activeClassName="active">
              {page[0]}
            </Link>
          })
        }
      </div>
    )
  }
}

export default Nav