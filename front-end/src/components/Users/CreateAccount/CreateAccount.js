/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './CreateAccount.css';
import 'materialize-css/dist/css/materialize.min.css';

/* CreateAccount component */
class CreateAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        user : {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            message:''
        }
    }
  }

  _createAccount = (event) => {
    event.preventDefault();

    var data = {
        user: {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }
    }

    var options = {
        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
    }

    fetch('http://localhost:8080/users', options)
    .then((res) => (res.json()))
    .then(
        (result) => {
            this.setState({message: result.message});
        },
        (error) => {
            this.setState({message: "Une erreur s'est produite."});
        }
    )
  }

  render() {
    return (
        <div className="row">
            <div className="fluid col s12 silver-block">
                <h2 className="title-uppercase-grey center">Welcome</h2>
                <h3 className="subtitle-turquoise center">The first step to level-up your life.</h3>
            </div>

            <div className="container">
                <div className="row">
                    <form>
                        <div className="input-field col s6">
                            <input onChange={(event) => {this.setState({firstname:event.target.value})}} id="firstname" type="text" className="validate" required/>
                            <label for="firstname">Your firstname</label>
                        </div>
                        <div className="input-field col s6">
                            <input onChange={(event) => {this.setState({lastname:event.target.value})}} id="lastname" type="text" className="validate" required/>
                            <label for="lastname">Your lastname</label>
                        </div>
                    
                        <div className="input-field col s6">
                            <input onChange={(event) => {this.setState({email:event.target.value})}} id="email-login" type="email" className="validate" required />
                            <label for="email-login">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input onChange={(event) => {this.setState({password:event.target.value})}} id="password-login" type="password" className="validate" required />
                            <label for="password-login">Password</label>
                        </div>
                        <button onClick={this._createAccount} class="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default CreateAccount;
