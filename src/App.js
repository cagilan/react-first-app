import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
     <Route/>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page !!!</h1>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page !!!</h1>
      </div>
    )
  }
}

class Contact extends Component {
  render() {  
    return (
        <div>
          <h1>Contact Page !!!</h1>
        </div>
      )
  }
}

class Route extends Component {
  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() { // during component render this method trigger first
    window.addEventListener('popstate', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })  
  }

  render() {
    let Link;
    console.log(this.state.route)
    switch(this.state.route) {
      case '/about': Link = About;
        break;
      case '/contact': Link = Contact;
        break;
      default: Link = Home;
    }
    return(
      <div>
        <ul>          
        <li>
          <a href='#'>Home</a>
          </li>
          <li>
            <a href='#/about'>About</a>
          </li>
          <li>
          <a href='#/contact'>Contact</a>
          </li>
        </ul>
      <Link/>     
      </div>
    )
  }
}