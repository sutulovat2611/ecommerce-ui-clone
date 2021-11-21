import classes from './Item.module.css'
import ItemCard from '../../UI/ItemCard'
function Item(props){
    return(
        <ItemCard>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                    <button class={classes.btn}>Button</button>
                </div>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>
                        Star
                    </button>
                    <button>
                        Buy +
                    </button>
                </div>
            </li>
        </ItemCard>
    );
}

export default Item;