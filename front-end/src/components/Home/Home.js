/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';

/* App component */
class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (

        <div id="cta">
            <div className="container">
                <div className="row">
                <div className="col s6">
                </div>
                <div className="col s6">
                    <h1 className="slogan">It's time to <span className="big">empower</span> your life.</h1>     
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
