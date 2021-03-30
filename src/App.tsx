import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import GalleryElement from "./components/GalleryElement";

function App() {
  return (
    <div className="App">
      <div className="container">
        <GalleryElement id="6939156080199027973"></GalleryElement>
        <GalleryElement id="6933649276861975813"></GalleryElement>
        <GalleryElement id="6718335390845095173"></GalleryElement>
      </div>
      <Helmet>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
