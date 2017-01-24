'use strict'

import React, {Component} from 'react'
// immutability-helper will allow the state to be updated w/out being overwritten (as ...setState() would be doing)
import update from 'immutability-helper'

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
      },
      userContact: {
        name: '',
        email: '',
        phone: '',
        msg: ''
      }
    }
  }

  handleFormSubmit = (ev) => {
    // will need to: clear form, advise user of successful entry, send email
    ev.preventDefault()
    console.log("SUBMISSION RECEIVED:   ", this.state.userContact)
    this.setState({userContact: {
      name: '',
      email: '',
      phone: '',
      msg: ''
    }})

    // Need to disable SUBMIT button?
  }

  // Handler for contact form changes
  handleFieldChange = (field) => {
    return (ev) => {
      // use $set to update field w/ target w/out overwriting entire object
      let newState = update(this.state.userContact,
        {[field]: { $set: ev.target.value
      }})

      this.setState({userContact: newState})
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

        <div className="contact-form">
          <form action="" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:
                <input type="text" name="name" value={this.state.userContact.name} onChange={this.handleFieldChange('name')} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:
                <input type="email" name="email" value={this.state.userContact.email} onChange={this.handleFieldChange('email')} />
              </label>
              <label htmlFor="phone">Phone:
                <input type="tel" name="phone" value={this.state.userContact.phone} onChange={this.handleFieldChange('phone')} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="msg">Message:
                <textarea name="msg" value={this.state.userContact.msg} onChange={this.handleFieldChange('msg')} placeholder="What would you like ask us?" />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    )
  }
}

export default Contact