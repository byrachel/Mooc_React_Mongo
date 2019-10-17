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

    }
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
                            <input id="email-login" type="email" className="validate" />
                            <label for="email-login">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password-login" type="password" className="validate" />
                            <label for="password-login">Password</label>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
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
