import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
export default class DisplayWeather extends Component {
  render() {
    return (
      <Segment>
        In {this.props.location} are {this.props.temp} Celsius degree.
      </Segment>
    )
  }
}
