import React, {Component} from 'react'

class Map extends Component {
  render() {
    return (
      // {if (!this.props.loaded) {
      //   return <div>Loading...</div>
      // }}

      <div className="map">

      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyDQH3aMtGLlRKkvvuVDR5_pW4_pJ490w0w
})(Container)