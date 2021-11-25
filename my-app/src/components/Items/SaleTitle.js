/*Importing from the external libraries*/
import { BsLightningCharge } from "react-icons/bs";
/* Importing other components */
import CountDown from "./CountDownElement";
/* Importing the scss file for styling */
import "./SaleTitle.scss";

function SaleTitle() {
  return (
    <div className="line">
      <h1 className="header">
        <BsLightningCharge />
        Flash Sale
      </h1>
      {/* Count down element */}
      <div className="count-down">
        <CountDown />
      </div>
    </div>
  );
}

export default SaleTitle;
