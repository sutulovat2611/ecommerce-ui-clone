import VoucherList from "./VoucherList";
import classes from "./AllVouchers.module.scss";


const DUMMY_DATA = [
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

function AllVouchers() {
  return (
    <section>
      <h1 className={classes.header}>
          More Voucher
      </h1>
      <VoucherList vouchers={DUMMY_DATA} />
    </section>
  );
}

export default AllVouchers;
