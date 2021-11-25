/* Importing the scss file for styling */
import "./Gallery.scss";

/* Imporing from react */
import React from "react";

/* Importing from external libraries */
import ImageGallery from "react-image-gallery";

/* Importing pictures */
import pic1 from "./Pictures/pic1.jpg";
import pic2 from "./Pictures/pic2.jpg";
import pic3 from "./Pictures/pic3.jpg";
import pic4 from "./Pictures/pic4.jpg";
import pic5 from "./Pictures/pic5.jpg";

const images = [
  {
    original: pic1,
    thumbnail: pic1,
  },
  {
    original: pic2,
    thumbnail: pic2,
  },
  {
    original: pic3,
    thumbnail: pic3,
  },
  {
    original: pic4,
    thumbnail: pic4,
  },
  {
    original: pic5,
    thumbnail: pic5,
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery
          items={images}
          thumbnailPosition={"left"}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    );
  }
}

export default MyGallery;
