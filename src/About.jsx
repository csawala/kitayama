import React, {Component} from 'react'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className="page-render">
        <article id="sensei" className="instructor">
          <h2>Sensei James Kenney</h2>
          <h3>Godan (5th Degree)</h3>
          <h3>Head Instructor</h3>
          <p>
            Sensei Kenney’s training in Martial Arts began in Wado-Ryu Karate and continued in Taekwondo while attending Ryerson Polytechnic Institute for Mechanical Engineering. Upon graduating, he entered the business world of heavy machinery manufacturing with a large international company. He successfully rose within the company to be a Global Marketing Manager, with an innovative breakthrough into China and the Middle East markets.
          </p>
          <p>
            With increased job stresses, an outlet was need to maintain health and peace of mind. Sensei Kenney began training in the mid 1980’s in Goju Ryu Karate Do under Sensei Platt. He has continued his studies in Karate, Kobudo, Iaido and Niei Chi and was awarded his current rank of Godan in 2009.
          </p>
          <p>
            Sensei Kenney has attended numerous seminars and received instruction from such notable instructors as Sensei Shintani, Park Jong Soo, Master Kim, Sensei Platt, Sensei Peter Urban, Morio Higaonna, Don Warrener, Fumio Demura, Benny Allen, Joe Lewis, Bill Wallace, Master Li Guong Fu, Master Cai Cu Chu, Ji Zhuo Di, Grand Master Sha, and Hanshi Richard Kim.
          </p>
          <p>
            Although he has travelled to the Four Corners of the world, his business trip to China, accompanied by Sensei Platt, was the most memorable. He was one of the first westerners to visit the Taoist’s 600 year old Purple Dragon Temple and to climb to the top of Wudang Mountain (before modernization began). This experience, along with his visit to Fuzhou, Fukian Province, where he studied with five masters of the Southern Shaolin Five Fist Styles, was unforgettable. Fuzhou was the embarkation point for White Crane Kung Fu to influence martial arts in Okinawa resulting in Goju Ryu. It then travelled by way of Japan to America and finally to Canada.
          </p>
          <p>
            With more than 20 years experience teaching the Martial Arts, he has produced more than 30 Black Belts. He currently runs a full-time, professional Martial Arts School in Burlington, as an affiliate of Classical Martial Arts Canada. With his two sons, Sensei Kenney also oversees the operations of two additional professional branch schools.
          </p>
          <p>
            Recently he has been entrusted to produce a Business System Development Manual for the expansion and growth of the Classical Martial Arts Canada Organization, utilizing his extensive private business experience.
          </p>
        </article>

        <article id="senpai" className="instructor">
         <h2>Senpai Nantoka</h2>
         <h3>Yondan (4th Degree)</h3>
         <h3>Assistant Instructor?</h3>
         <p></p>
        </article>
      </section>
    )
  }
}

export default About