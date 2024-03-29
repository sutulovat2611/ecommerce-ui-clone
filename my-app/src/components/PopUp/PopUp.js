/* Importing from react */
import React, { useEffect, useRef } from "react";

/*Importing from the external libraries*/
import { BsHeart, BsStar } from "react-icons/bs";

/* Importing other components */
import QuantityPicker from "./QuantityPicker";
import MyGallery from "./Gallery";

/* Importing the scss file for styling */
import "./PopUp.scss";

function PopUp(props) {
  let modelRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    });
  });

  return props.trigger ? (
    <div className="popup">
      <div ref={modelRef} className="popup-inner">
        {/* The pictures gallery */}
        <div className="photo-gallery">
          <MyGallery />
        </div>

        <div className="details">
          {/* Sale and rate */}
          <div className="sale-rate">
            <div className="sale_number">-{props.data.sale}%</div>
            <button className="star">
              <BsStar /> {props.data.rating}
            </button>
          </div>

          {/* Title */}
          <div className="title">{props.data.title}</div>

          {/* Detailed info*/}
          <div className="sku-brand">
            <span className="inbuilt sku">SKU: </span>
            <span className="given-sku">{props.data.sku}</span>
            <br />
            <span className="inbuilt brand">Brand: </span>
            <span className="given-brand">{props.data.brand_name}</span>
          </div>

          {/* Old and New price */}
          <div className="price">
            <p className="new_price">$ {props.data.new_price}</p>
            <p className="old_price">
              {" "}
              <s>$ {props.data.old_price} </s>
            </p>
          </div>

          {/* Color Choice */}
          <div className="color">
            <span>Colors </span>
            <span className="color-name">ColorName</span>
            <br />
            <br />
            {props.data.colors.map((color) => (
              <label className="container_color">
                <input type="radio" name="color" />
                <span
                  style={{ backgroundColor: color }}
                  className="checkmark_color"
                ></span>
              </label>
            ))}
          </div>

          {/* Size Choice */}
          <div className="size">
            <p>Size</p>
            {props.data.sizes.map((size) => (
              <label className="container_size">
                <input type="radio" name="size" />
                <span className="checkmark_size"> {size}</span>
              </label>
            ))}
            <p className="size-guide-ttl">Size Guide</p>
          </div>

          {/* Quantity Choice */}
          <div className="quantity">
            <p>Quantity</p>
            <QuantityPicker min={0} max={1000} />
          </div>

          {/* Fav, Add to cart, Buy Buttons */}
          <div className="actions">
            <button class="btn_fav">
              <BsHeart />
            </button>
            <button class="btn_add">Add To Cart</button>
            <button class="btn_buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
