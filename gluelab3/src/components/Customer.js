import React, { Component } from 'react';
import {Card,Button} from "react-bootstrap";


export default class Customer extends Component {


  render() {
    return (
    <>
    <div class = "buttonFun">
    {this.props.isEnabled ?
    <Button onClick = {() => this.props.disableButton()} variant = "danger">Disable</Button>
    :
    <Button onClick = {() => this.props.enableButton()} variant = "primary">Enable</Button>
    }   
    </div> 
    </>

    )
  }
}
