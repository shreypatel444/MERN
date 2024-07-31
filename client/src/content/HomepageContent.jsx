import React from 'react'
import TextHome from '../component/TextHome';
import PhotoHome from '../component/PhotoHome';
import CardHome from '../component/CardHome';
import "../style/HomepageContent.css";

export default function HomepageContent() {
  return (
    <div className="App">
      <div className="main-container">
        <TextHome />
        <PhotoHome />
      </div>
        <CardHome />
    </div>
  )
}
