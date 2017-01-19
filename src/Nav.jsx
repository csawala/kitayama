import React, {Component} from 'react'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="button-bar">
        {
          this.props.pages.map((page) => {
            return <a href={page[1]} key={page[1]} className="navbutton">
              {page[0]}
            </a>
          })
        }
      </div>
    )
  }
}

export default Nav

