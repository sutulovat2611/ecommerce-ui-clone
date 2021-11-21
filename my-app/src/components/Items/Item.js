import classes from './Item.module.scss'
import ItemCard from '../../UI/ItemCard'
/* Icons */
import { BsHeart, BsStar } from "react-icons/bs";
function Item(props){
    return(
        <ItemCard>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                    <div className={classes.sale_number}>-25%</div>
                    <button class={classes.btn_fav}> <BsHeart /></button>
                </div>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <div className={classes.prices}>
                        <p className={classes.new_price}>$3.99</p>
                        <p className={classes.old_price}>$5.99</p>
                    </div>
                </div>
                <div className={classes.choice}></div>
                <div className={classes.actions}>
                    <button  className={classes.star}>
                    <BsStar/> 4.6
                    </button>
                    <button className={classes.buy_btn}>
                        BUY +
                    </button>
                </div>
            </li>
        </ItemCard>
    );
}

export default Item;