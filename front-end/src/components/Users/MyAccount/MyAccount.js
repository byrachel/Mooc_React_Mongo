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

        email: '',
        firstname: '',
        lastname: '',
        status: '',
        avatar: '',
        password: null
    }
  }
  
  componentDidMount() {
    
    var options = {
        method: 'GET',
        headers: {
            "X-Requested-With": "XmlHttpRequest",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }
    
  fetch('http://localhost:8080/myAccount', options)
  .then((res) => (res.json()))
  .then(
      (result) => {
          this.setState({
            email: result.email,
            firstname: result.firstname,
            lastname: result.lastname,
            status: result.status,
            avatar: result.avatar
        });
      },
      (error) => {
          this.setState({message: "Please, create an account or login."});
      }
    )
  }

  _displayUser = () => {
    if(this.state.email) {
      return(
        <div>
        <div className="row">
          <div className="col s6">
            <p>AVATAR</p>
          </div>
          <div className="col s6">
            <h2>Welcome to your learning space</h2>
              <p>{this.state.firstname} {this.state.lastname}</p>
              <p>Email: {this.state.email}</p>
              <p>Status: {this.state.status}</p>
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
    )  
  }
  }


  render() {
    return (
      <div className="container">
          {this._displayUser()}
      </div>
    );
  }
}

export default MyAccount;
