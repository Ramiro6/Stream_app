import React, { Component } from 'react';
import GoogleKey from './enviroments/GoogleKey';


class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        cliendId: GoogleKey,
        scope: 'email'
      })
    })
  }
  render() {
    return(
      <div>
        <h5>Auth</h5>
      </div>
    )
  }
}

export default GoogleAuth
