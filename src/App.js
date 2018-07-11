import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PhotoGallery from './PhotoGallery'

class App extends Component {
  render() {

    const images = [
      {
        url: '/image/bird.jpg',
        caption: 'bird',
      }, {
        url: '/image/cat.jpg',
        caption: 'cat',
      }, {
        url: '/image/dog.jpg',
        caption: 'dog',
      }
    ]

    return (
      <div className="App">
        <PhotoGallery images={images}/>
      </div>
    );
  }
}

export default App;
