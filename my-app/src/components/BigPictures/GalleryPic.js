
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import pic1 from './Pictures/pic1.jpg'; 
import pic2 from './Pictures/pic2.jpg'; 
import pic3 from './Pictures/pic3.jpg'; 
import pic4 from './Pictures/pic4.jpg'; 
import pic5 from './Pictures/pic5.jpg'; 

import "./GalleryPic.scss";



const handleDragStart = (e) => e.preventDefault();



const style = { 
    width: "100%",
     };

const items = [
  <img src= {pic1} onDragStart={handleDragStart} role="presentation" style={style} />,
  <img src= {pic2} onDragStart={handleDragStart} role="presentation" style={style} />,
  <img src= {pic3}  onDragStart={handleDragStart} role="presentation" style={style} />,
  <img src= {pic4}  onDragStart={handleDragStart} role="presentation" style={style} />,
  <img src= {pic5}  onDragStart={handleDragStart} role="presentation"  style={style} />,
];

const Gallery = () => {
  return (
    <AliceCarousel 
    mouseTracking 
    items={items} 
    autoHeight= {true}
    autoWidth= {true}
    />
  );
}


export default Gallery;

