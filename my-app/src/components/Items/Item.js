import classes from "./Item.module.scss";
import ItemCard from "../../UI/ItemCard";
/* Icons */
import { BsHeart, BsStar } from "react-icons/bs";

import PopUp from "../PopUp/PopUp";

import { useState } from "react";

function Item(props) {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <ItemCard>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} onClick={() => setButtonPopUp(true)} />
          <div className={classes.sale_number}>-{props.sale}%</div>
          <button class={classes.btn_fav}>
            {" "}
            <BsHeart />
          </button>
        </div>
        <div className={classes.content}>
          <div className={classes.descr}>
            <h2 className={classes.title} onClick={() => setButtonPopUp(true)}>{props.title}</h2>
            <div className={classes.prices}>
              <p className={classes.new_price}>$ {props.new_price}</p>
              <p className={classes.old_price}>$ {props.old_price}</p>
            </div>
          </div>
          <div className={classes.choice}>
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

            <div className={classes.size_choice}>
              {props.sizes.map((size) => (
                <label className={classes.container_size}>
                  <input type="radio" name="size" />
                  <span className={classes.checkmark_size}> {size}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={classes.actions}>
            <button className={classes.star}>
              <BsStar /> {props.rating}
            </button>
            <button className={classes.buy_btn} onClick={() => setButtonPopUp(true)}>BUY +</button>
          </div>
        </div>

        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} data={props}>

        </PopUp>
      </div>
    </ItemCard>
  );
}

export default Item;
