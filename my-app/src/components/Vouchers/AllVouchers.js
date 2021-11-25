/* Importing other components */
import VoucherList from "./VoucherList";

/* Importing the scss file for styling */
import classes from "./AllVouchers.module.scss";


const data = [
  {
    title: "Happy Monday",
    hashtag: "MONHPY",
    percent: 10,
  },
  {
    title: "Payday Surprise",
    hashtag: "SRPSYDY",
    percent: 20,
  },
  {
    title: "First Order",
    hashtag: "HPYFRST",
    percent: 30,
  },
  {
    title: "Vegeterian Food",
    hashtag: "VEGANLOVE",
    percent: 50,
  },
];

window.localStorage.setItem('vouchers_data', JSON.stringify(data));

function AllVouchers() {
  return (
    <section>
      <h1 className={classes.header}>
          More Voucher
      </h1>
      <VoucherList vouchers={JSON.parse(window.localStorage.getItem('vouchers_data'))} />
    </section>
  );
}

export default AllVouchers;
