import React, {Component} from 'react'
import {Link} from 'react-router'


class ProgramContainer extends Component {
  render() {
    return (
      <section className="page-render">
        <div className="program" id="karate">
          <h3>Goju Ryu Karate</h3>
          <p>
            As part of the Karate program, students also learn Japanese Jiu Jitsu, Aikido, and self defence training. Goju Ryu reflects the concept of Yin and Yang -- that these two opposites should complement each other. It is this complement of hard and soft which gives Goju Ryu its beautiful, disciplined movements, filled with grace, flowing forms, and strength.
          </p>
        </div>
        <div className="program" id="taichi">
          <h3>Tai Chi</h3>
          <p>
            Tai Chi Chuan is an ancient Chinese art of self-defence, conceived as a series of soft, slow, and flowing sequences of movement specifically designed to cultivate and direct the internal power that circulates through one's system, which improves the practitioners' health, and provides a source of energy for self defence. Our program includes Chi Kung and Pa Qua.
          </p>
        </div>
        <div className="program" id="kobudo">
          <h3>Kobudo (Weapons)</h3>
          <p>
            In Kobudo the weapon is simply used as an extension of the body. Nearly all basic Karate-Do moves can be duplicated with a weapon in your hand, therefore, the perfection of basic moves is a necessity for weapons training. The weapons that we teach at our school are the bo - sai - jo - tong fa - kama - ulesi - knife procedures - Iaido - and Kenjutsu.
          </p>
        </div>
        <div className="program" id="youth">
          <h3>Children & Young Adults</h3>
          <p>
            Martial Arts have long been recognized as one of the best methods to help young people develop their confidence and learn how to improve their attention span. Improved attention span has been shown to be one of the most obvious tools for improving academic performance. Training in Martial Arts focuses directly on this aspect of development.
          </p>
        </div>

        <Link to='/contact' className="contactLink">Contact Us</Link>
      </section>
    )
  }
}

export default ProgramContainer