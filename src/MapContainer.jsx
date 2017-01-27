import React, {Component} from 'react'
import Map from 'google-maps-react'
import Google from './GoogleApiComponent.js'

class MapComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} className="map">

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

    )
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyDQH3aMtGLlRKkvvuVDR5_pW4_pJ490w0w
})(MapComponent)