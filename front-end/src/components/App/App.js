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
import MyAccount from '../Users/MyAccount/MyAccount';
import CoursesList from '../Courses/CoursesList/CoursesList';
import User from '../Users/User/User';
import CreateAccount from '../Users/CreateAccount/CreateAccount';
import Home from '../Home/Home';


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      logged: '',
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
        method: 'GET',
        headers: {
            "X-Requested-With": "XmlHttpRequest",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }
    
    fetch('http://localhost:8080/login', options)
    .then((res) => (res.json()))
    .then(
        (result) => {
            this.setState({logged: result});
        },
        (error) => {
            this.setState({logged: false});
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
                <Link to="/Home/Home"><img Alt="Logo Level.up" src="/img/logo-levelup-2019.png" className="brand-logo"></img></Link>
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


          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/CoursesList/CoursesList">
              <CoursesList />
            </Route>
            <Route path="/MyAccount/MyAccount">
              <MyAccount />
            </Route>
            <Route path="/CreateAccount/CreateAccount">
              <CreateAccount />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <footer>

          <div className="container">
            <div className="ruban">
              <h2 className="title-uppercase-grey center">About</h2>
              <h3 className="subtitle-turquoise center">What is Level.up ?</h3>
            </div>

              <div className="row">
                <div className="col l4 s12 hoverable">
                  <p className="center"><MaterialIcon icon="school" color='#45B8AC' size='large' /></p>
                  <div className="center green-block">
                    <p>Level.up is dedicated to <span className="levelup">empower people's life</span>, learn how to create a business based on your passion.</p>
                  </div>
                </div>
                <div className="col l4 s12 hoverable">
                  <p className="center"><MaterialIcon icon="forum" color='#E684C3' size='large' /></p>
                  <div className="pink-block center">
                    <p>More than a simple course website. With Level Up you can <span className="levelup">follow and message</span> teachers and students.</p>
                  </div>
                </div>
                <div className="col l4 s12 hoverable">
                  <p className="center"><MaterialIcon size='large' icon="star" color='#F7DC69' /></p>
                  <div className="yellow-block center">
                    <p>Discover our <span className="levelup">high rated courses</span> and our testimonials. We work hard to give you the best experience !</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="copyright">
            <p className="white-text center">Made with ReactJS, NodeJS, MongoDB <MaterialIcon icon="favorite" color='#FFFFFF' /> Rachel Nething</p>
            <p className="small white-text center">Image:<a href="https://pixabay.com/fr/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1867751">Pexels</a> Pixabay</p>
          </div>

        </div>

      </Router>
    );
  }
}

export default App;
