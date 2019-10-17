/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './MyAccount.css';
import 'materialize-css/dist/css/materialize.min.css';

/* App component */
class MyAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user : {
        firstname: '',
        lastname: '',
        email: '',
        avatar: '',
        purchases: '',
        status: '',
        courselevel: '',
        friends: ''
      }
    }
  }


  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col s6">
              <p>AVATAR</p>
            </div>
            <div className="col s6">
              <h2>Welcome to your learning space</h2>
              <p>{this.state.user.firstname} {this.state.user.lastname}</p>
              <p>Email: {this.state.user.email}</p>
              <p>Status: {this.state.user.status}</p>
              <a href="#">Edit my account</a>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img src="images/sample-1.jpg"></img>
                    <span className="card-title">Javascript for the newbies</span>
                  </div>
                  <div className="card-content">
                    <p>With this 4 weeks course, you will how to create a modern and professional website.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Start !</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default MyAccount;
