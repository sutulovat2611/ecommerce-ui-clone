/* Importing the scss file for styling */
import classes from './VoucherCard.module.scss';

function VoucherCard(props){
    return (
    <div className={classes.card}>
        {props.children}
    </div>
    );
} 

export default VoucherCard;