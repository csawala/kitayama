import React, {Component} from 'react'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      address: {
        street: '2130 Mountain Grove Ave',
        city: 'Burlington',
        prov: 'ON',
        postal: 'L7P 2J3'
      },
      phone: '(905) 331-5344',
      email: 'cmac.burl.north@sympatico.ca',
      position: {
        latitude: 43.3670293,
        longitude: -79.8275208
      }
    }
  }

  render() {
    let dojo = this.state.address

    return (
      <section className="page-render">
        <div className="address">
          {dojo.street},
          {dojo.city},
          {dojo.prov},
          {dojo.postal}
        </div>
        {this.state.phone}
        <br/>
        {this.state.email}
      </section>
    )
  }
}

export default Contact