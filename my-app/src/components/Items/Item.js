/* Importing from react */
import { useState } from "react";

/*Importing from the external libraries*/
import { BsHeart, BsStar } from "react-icons/bs";

/* Importing other components */
import ItemCard from "../../UI/ItemCard";
import PopUp from "../PopUp/PopUp";

/* Importing the scss file for styling */
import classes from "./Item.module.scss";

function Item(props) {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <ItemCard>
      <div className={classes.item}>
        {/* Image of the card */}
        <div className={classes.image}>
          <img
            src={props.image}
            alt={props.title}
            onClick={() => setButtonPopUp(true)}
          />
          <div className={classes.sale_number}>-{props.sale}%</div>
          <button class={classes.btn_fav}>
            {" "}
            <BsHeart />
          </button>
        </div>
        {/* Content */}
        <div className={classes.content}>
          {/* Description: Title and price */}
          <div className={classes.descr}>
            <h2 className={classes.title} onClick={() => setButtonPopUp(true)}>
              {props.title}
            </h2>
            <div className={classes.prices}>
              <p className={classes.new_price}>$ {props.new_price}</p>
              <p className={classes.old_price}>$ {props.old_price}</p>
            </div>
          </div>
          {/* Radio Buttons: options */}
          <div className={classes.choice}>
            {/* Radio Buttons for color */}
            <div className={classes.color_choice}>
              {props.colors.map((color) => (
                <label className={classes.container_color}>
                  <input type="radio" name="color" />
                  <span
                    style={{ backgroundColor: color }}
                    className={classes.checkmark_color}
                  ></span>
                </label>
              ))}
            </div>
            {/* Radio Buttons for size */}
            <div className={classes.size_choice}>
              {props.sizes.map((size) => (
                <label className={classes.container_size}>
                  <input type="radio" name="size" />
                  <span className={classes.checkmark_size}> {size}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className={classes.actions}>
            {/* Rate button */}
            <button className={classes.star}>
              <BsStar /> {props.rating}
            </button>
            {/* Buy button */}
            <button
              className={classes.buy_btn}
              onClick={() => setButtonPopUp(true)}
            >
              BUY +
            </button>
          </div>
        </div>

        {/* Pop-up which appears onclick on any card */}
        <PopUp
          trigger={buttonPopUp}
          setTrigger={setButtonPopUp}
          data={props}
        ></PopUp>
      </div>
    </ItemCard>
  );
}

export default Item;
