import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/Header.css';

class Header extends Component {

  navTo(uri){
    window.location.href = window.location.origin + uri;
  }

  render() {
    return (
      <div className="App-header">
        <a href="#" class='active'><h1 onClick={() => {this.navTo('')}}>Udacitrivia</h1></a>
        <a href="#"><h2 onClick={() => {this.navTo('')}}>List</h2></a>
        <a href="#"><h2 onClick={() => {this.navTo('/add')}}>Add</h2></a>
        <a href="#"><h2 onClick={() => {this.navTo('/play')}}>Play</h2></a>
      </div>
    );
  }
}

export default Header;
