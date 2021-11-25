/* Importing other components */
import VoucherCard from "../../UI/VoucherCard";

/* Importing the scss file for styling */
import classes from "./Voucher.module.scss";


function Voucher(props) {
  return (
    <VoucherCard>
      <li className={classes.item}>
        {/* white part */}
        <div className={classes.container}>
          <div className={classes.left}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.hashtag}>#{props.hashtag}</p>
          </div>
          {/* purple part */}
          <div className={classes.right}>
            <p><b>{props.percent}%</b></p>
            <p>Off</p>
          </div>
        </div>
      </li>
    </VoucherCard>
  );
}

export default Voucher;
