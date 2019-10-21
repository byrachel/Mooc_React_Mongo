/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './User.css';
import 'materialize-css/dist/css/materialize.min.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';


/* App component */
class User extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user : {
        email:'',
        password:'',
        message:''
      }
    }
  }

  _inputEmail = (event) => {
    this.setState({email: event.target.value});
  }

  _inputPassword = (event) => {
    this.setState({password: event.target.value});
  }

_inputLogin = (e) => {

  e.preventDefault();

    if(!this.state.email || !this.state.password) {
        return;
    }

    var data = {
      email: this.state.email,
      password: this.state.password
    }

    var options = {
      method: "POST",
      headers: {
        "X-Requested-With": "XmlHttpRequest",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }

    

    fetch("http://localhost:8080/login", options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        this.setState({message: "Please try again or create a new account."});
      }
    )
  }

  render() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <a href="/" className="modal-close"><MaterialIcon icon="clear" color='#000000' /></a>
                    <div className="ruban">
                        <h2 className="title-uppercase-grey center">Welcome</h2>
                        <h3 className="subtitle-turquoise center">Don't stop learning !</h3>
                    </div>
                    <form>
                        <div className="input-field col s6">
                            <input id="email-login" onChange={this._inputEmail} type="email" className="validate" />
                            <label for="email-login">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password-login" onChange={this._inputPassword} type="password" className="validate" />
                            <label for="password-login">Password</label>
                        </div>
                        <button onClick={this._inputLogin} class="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </form>
                </div>
            </div>
            <br />
            <p className="center"><strong>First time here ?</strong> <a href="http://localhost:3000/CreateAccount/CreateAccount">Create an account.</a></p>
        </div>
    );
  }
}

export default User;
