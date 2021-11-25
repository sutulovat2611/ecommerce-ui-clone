/* Importing other components */
import Voucher from "./Voucher";

/* Importing the scss file for styling */
import classes from "./VoucherList.module.scss";

/* Importing from external libraries */
import { Grid } from "@mui/material";

function VoucherList(props) {
  return (
    <ul className={classes.list}>
      <Grid container>
        {props.vouchers.map((voucher) => (
          <Grid voucher xs={3}>
            <Voucher
              title={voucher.title}
              hashtag={voucher.hashtag}
              percent={voucher.percent}
            />
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}

export default VoucherList;
