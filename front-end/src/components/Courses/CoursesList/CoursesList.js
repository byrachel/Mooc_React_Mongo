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
      products : []
    }
  }

  componentDidMount() {
    this._fetchProducts();
  }
  
  _fetchProducts = () => {
    
    var options = {
        method: 'GET',
        headers: {
            "X-Requested-With": "XmlHttpRequest",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }
    
    fetch('http://localhost:8080/products', options)
    .then((res) => (res.json()))
    .then(
        (result) => {
            this.setState({products: result.products});
        },
        (error) => {
            this.setState({message: "No products yet."});
        }
    )
  }

  _products = () => {

    var products = this.state.products;
    
    var catalog = products.map((pdt) => {
      return(
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="size-img" alt="formation" src={pdt.img}></img>
              <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">shopping_cart</i></a>
            </div>
            <div className="card-content">
              <span className="card-title">{pdt.title}</span>
              <p>{pdt.description}</p>
              <p><strong>{pdt.category}</strong></p>
            </div>
            <div className="card-action center">
              <p>{pdt.price}</p>
            </div>
            <div className="card-action center">
              <a href={pdt.url}>More information</a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="row">{catalog}</div>
    );
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
          {this._products()}
        </div>

      </div>
    );
  }
}

export default CoursesList;
