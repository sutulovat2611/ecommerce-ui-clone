import classes from './VoucherCard.module.css';

function VoucherCard(props){
    return (
    <div className={classes.card}>
        {props.children}
    </div>
    );
} 

export default VoucherCard;