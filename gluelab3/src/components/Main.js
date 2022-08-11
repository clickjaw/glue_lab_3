import React, { Component } from 'react';
import Customer from "./Customer";


export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEnabled: true,
        }
      }

      disableButton = () => {
        this.setState({isEnabled:false}, () => console.log(this.state.isEnabled))
      }
      enableButton = () => {
        this.setState({isEnabled:true}, () => console.log(this.state.isEnabled))
      }

  render() {
    return (
      <Customer
      enableButton = {this.enableButton}
      disableButton = {this.disableButton}
      isEnabled = {this.state.isEnabled}
      />

    )
  }
}
