/* Importing the scss file for styling */
import classes from './ItemCard.module.scss';

function ItemCard(props){
    return (
    <div className={classes.card}>
        {props.children}
    </div>
    );
} 

export default ItemCard;