import classes from './VoucherList.module.css';
import Voucher from './Voucher';

import {Grid} from '@mui/material';

function VoucherList(props){
    return (
    <ul className={classes.list}>
        <Grid container >
    {props.vouchers.map(voucher => 
            <Grid voucher xs={3}>
            <Voucher
                title={voucher.title}
                hashtag={voucher.hashtag}
                percent={voucher.percent}
            />
            </Grid>)}
        </Grid>
    </ul>
    )
}  

export default VoucherList;