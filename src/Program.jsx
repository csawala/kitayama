import React, {Component} from 'react'

class Program extends Component {
  render() {
    return (
      <section className="page-render">
        <div className="program karate"></div>
        <div className="program taichi"></div>
        <div className="program kobudo"></div>

        <Link to='/contact' className="contactLink">Contact Us</Link>
      </section>
    )
  }
}

export default Programs