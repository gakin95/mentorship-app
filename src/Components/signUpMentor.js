import React, { Component } from 'react'
import ButtonAppBar from './Navbar'
import FullWidthGrid from './FullWidthGrid'
import MaterialUIPickers from './DatePicker'


export default class SignUPMentor extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <FullWidthGrid />
      </div>
    )
  }
}
