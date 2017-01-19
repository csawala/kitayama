import React, {Component} from 'react'
import {Link} from 'react-router'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="button-bar">
        {
          this.props.pages.map((page) => {
            return <Link to={'/' + page[1]} key={page[1]} className="navbutton">
              {page[0]}
            </Link>
          })
        }
      </div>
    )
  }
}

export default Nav

