import React, { Component } from 'react'
import ButtonAppBar from './Navbar'
import  LoginGrid from './loginGrid'



export default class Signin extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        < LoginGrid />
      </div>
    )
  }
}
