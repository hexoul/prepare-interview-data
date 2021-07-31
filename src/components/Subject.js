import React, { Component } from 'react'

export class Subject extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}
