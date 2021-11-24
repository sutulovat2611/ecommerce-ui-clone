
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
    <div class="container">
        <img src= {pic1} onDragStart={handleDragStart} role="presentation" style={style} />
        <div class="text-1">New Arrival</div>
        <div class="text-2">Mini Dress</div>
        <div class="text-3">SHOP NOW</div>
    </div>,

    <div class="container">
        <img src= {pic2} onDragStart={handleDragStart} role="presentation" style={style} />,
        <div class="text-1">New Arrival</div>
        <div class="text-2">Maxi Dress</div>
        <div class="text-3">SHOP NOW</div>
    </div>,

    <div class="container">
         <img src= {pic3}  onDragStart={handleDragStart} role="presentation" style={style} />,
        <div class="text-1">New Arrival</div>
        <div class="text-2">Leather bag</div>
        <div class="text-3">SHOP NOW</div>
    </div>,

    <div class="container">
        <img src= {pic4}  onDragStart={handleDragStart} role="presentation" style={style} />,
        <div class="text-1">New Arrival</div>
        <div class="text-2">Heels</div>
        <div class="text-3">SHOP NOW</div>
    </div>,

    <div class="container">
        <img src= {pic5}  onDragStart={handleDragStart} role="presentation"  style={style} />,
        <div class="text-1">New Arrival</div>
        <div class="text-2">Yellow Bag</div>
        <div class="text-3">SHOP NOW</div>
    </div>,

];

const Gallery = () => {
  return (
    <AliceCarousel 
    mouseTracking 
    items={items} 
    autoWidth= {true}
    />
  );
}


export default Gallery;

