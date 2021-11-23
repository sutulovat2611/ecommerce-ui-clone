import React, { useEffect, useRef } from "react";
import "./PopUp.scss";
import { BsHeart, BsStar } from "react-icons/bs";

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
        <div className="photo-gallery">{/* The gallery of pictures */}</div>

        <div className="details">
          <div className="sale-rate">
            <div className="sale_number">-{props.data.sale}%</div>
            <button className="star">
              <BsStar /> {props.data.rating}
            </button>
          </div>

          <div className="title">{props.data.title}</div>
          <div className="sku-brand"></div>

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
            <p>Colors</p>
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

          {/* SIze Choice */}
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
          <div className="quantity"></div>

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
