/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './CreateAccount.css';
import 'materialize-css/dist/css/materialize.min.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

/* CreateAccount component */
class CreateAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }
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
                            <input id="firstname" type="text" className="validate" required/>
                            <label for="firstname">Your firstname</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastname" type="text" className="validate" required/>
                            <label for="lastname">Your lastname</label>
                        </div>
                    
                        <div className="input-field col s6">
                            <input id="email-login" type="email" className="validate" required />
                            <label for="email-login">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password-login" type="password" className="validate" required />
                            <label for="password-login">Password</label>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default CreateAccount;
