import React, {Component} from 'react'
import {Link} from 'react-router'


class Cmac extends Component {
  render() {
    return (
      <section className="page-render">
        THIS IS WHERE SAMPLE TEXT WOULD GO FOR CMAC

        <Link to='/contact' className="contactLink">Contact Us</Link>
      </section>
    )
  }
}

export default Cmac