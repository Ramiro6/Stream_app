import React, { Component } from 'react';
import GoogleKey from './enviroments/GoogleKey';

class GoogleAuth extends Component {
  state = { isSignedIn:  null }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: String(GoogleKey),
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return(
        <button onClick={this.onSignOutClick} className='btn btn-danger'>
          Sign out
        </button>
      )
    } else {
      return(
        <button onClick={this.onSignInClick} className='btn btn-primary'>
          Sign in
        </button>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth
