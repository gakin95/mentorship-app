import React, { Component } from 'react'
import ButtonAppBar from './Navbar'
import FullWidthGrid from './FullWidthGrid'
import Mentee from './Mentee'


export default class SignUpMentee extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <FullWidthGrid />
        <Mentee />
      
      </div>
    )
  }
}
