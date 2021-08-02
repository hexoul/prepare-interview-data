import React, { Component } from 'react'
import { Link } from '@chakra-ui/react'

export class Subject extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.match.params.id}</h2>
        <Link
          color='teal.500'
          href='https://chakra-ui.com'
          fontSize='2xl'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Chakra
        </Link>
      </div>
    )
  }
}
