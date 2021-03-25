import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "../assets/stylesheets/logo.gif"
    return (
      <img src={src} alt="logo" className="gif" />
    );
  }

}

export default Gif;