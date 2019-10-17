/* Module imports */
import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize.min.js';

/* Styles imports */
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

/* Gestionnaire de pages - imports */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/* Component imports */
import MyAccount from '../MyAccount/MyAccount';
import CoursesList from '../CoursesList/CoursesList';
import User from '../User/User';
import Home from '../Home/Home';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      showModal: false
    }
  }

  _loginMenu = () => {
    if(this.state.logged) {
      return (<Link to="/MyAccount/MyAccount" className="nav-link right-align">My Account</Link>);
    }
    else {
      return (<a className="nav-link right-align" onClick={this._toggleModal}>Sign in</a>);
    }
  }

  _toggleModal = () => {
    this.setState((state) => ({showModal: !state.showModal}));
  }

  _displayModal = () => {
    if(this.state.showModal) {
      return (
        <div>
          <div class="modal">
            <div class="modal-content">
              <User />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      );
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
      <Router>
        <div id="mainContainer">
          <div className="container">
            <header>
              <nav className="z-depth-0">
                <div className="nav-wrapper">
                <Link to="/Home/Home"><img Alt="Logo Level.up" src="/img/logo-levelup.png" className="brand-logo"></img></Link>
                  <ul className="right">
                    <li><MaterialIcon icon="search" color='#000000' /></li>
                    <li><Link to="/CoursesList/CoursesList" className="nav-link right-align">Courses</Link></li>
                    <li><MaterialIcon icon="person" color='#000000' /></li>
                    <li>{this._loginMenu()}</li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>

          {this._displayModal()}

          <Home />

          <div className="container">
          
          <div className="row">

            <div className="col s12 m4">
              <div className="card-panel teal">
                <span className="white-text"><strong>Empower your life</strong> with our free and trending courses. Because theory isn't enough, with our method you can practice while learning. What do you want to learn today ? 
                </span>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card hoverable">
                <div className="card-image">
                  <img className="size-img" src="/img/javascript.jpg"></img>
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

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/CoursesList/CoursesList">
              <CoursesList />
            </Route>
            <Route path="/MyAccount/MyAccount">
              <MyAccount />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <p className="grey-text text-lighten-4"><span className="levelup">Level.up</span> is a website dedicated to empower people's life. Here, you can learn how to create a business based on your passion.</p>
                  <p className="small">Image:<a href="https://pixabay.com/fr/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1867751">Pexels</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1867751">Pixabay</a></p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#!"><MaterialIcon icon="school" color='#ffffff' /> Find a course</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"><MaterialIcon icon="person" color='#ffffff' /> Create your profil</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!"><MaterialIcon icon="star" color='#ffffff' /> Discover our free courses.</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              <p className="grey-text text-lighten-4 center">Made with ReactJS, NodeJS, MongoDB & love. By: Rachel Nething</p>
              </div>
            </div>
          </footer>

        </div>

      </Router>
    );
  }
}

export default App;
