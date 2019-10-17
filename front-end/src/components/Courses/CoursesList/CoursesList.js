/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './CoursesList.css';
import 'materialize-css/dist/css/materialize.min.css';

/* Catalogue component */
class CoursesList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      category: '',
      link: ''
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {
    return (

      <div className="line">
          <div className="container">
            <div className="ruban">
              <h2 className="title-uppercase-grey center">Courses</h2>
              <h3 className="subtitle-turquoise center">Which skill do you want to improve today?</h3>
            </div>
          </div>

        <div className="container">

          <select class="browser-default">
            <option value="" disabled selected>Select by category :</option>
            <option value="1">Coding</option>
            <option value="2">Art</option>
            <option value="3">Webmarketing</option>
          </select>
        </div>
        <br />
        <div className="container">
          
          <div className="row">

            <div className="col s12 m6">
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

            <div className="col s12 m6">
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

export default CoursesList;
