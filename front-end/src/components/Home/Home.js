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
      <div>

          <div id="cta">

            
                <div className="row">
                <div className="col s12 m8">
                </div>
                <div className="col s12 m4 block-slogan">
                    <h1 className="slogan center">It's time to<br /><span className="big">empower</span><br />your life</h1>     
                </div>
                </div>
            </div>


        <div className="container">

          <div className="ruban">
            <h2 className="title-uppercase-grey center">Starting soon</h2>
            <h3 className="subtitle-turquoise center">Learn from the best</h3>
          </div>

          <div className="row">

            <div className="col s12 m4">
              <div className="card-panel teal">
                <span className="white-text"><span className="big-turquoise">What do you want to learn today ? </span><br /><br /><strong>Empower your life</strong> with our free and trending courses. Because theory isn't enough, with our method you can practice while learning.
                </span>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card hoverable">
                <div className="card-image">
                  <img className="size-img" src="/img/javascript.jpg"></img>
                  <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="material-icons">shopping_cart</i></a>
                </div>
                <div className="card-content">
                  <span className="card-title">Javascript in 4 weeks</span>
                  <p>With this 4 weeks course, you will how to create a modern and professional website.</p>
                  <p><strong>#coding</strong></p>
                </div>
                <div className="card-action center">
                  <p>Price: 50$</p>
                </div>
                <div className="card-action center">
                  <a href="#">More information</a>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card hoverable">
                <div className="card-image">
                  <img className="size-img" src="/img/css3.jpeg"></img>
                  <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="material-icons">shopping_cart</i></a>
                </div>
                <div className="card-content">
                  <span className="card-title">Dev with style</span>
                  <p>Learn the most powerful methods to enhance your website.</p>
                  <p><strong>#coding #webdesign</strong></p>
                </div>
                <div className="card-action center">
                  <p>Free course</p>
                </div>
                <div className="card-action center">
                  <a href="#">More information</a>
                </div>
              </div>
            </div>

          </div>
          </div>

      </div>

    );
  }
}

export default Home;
