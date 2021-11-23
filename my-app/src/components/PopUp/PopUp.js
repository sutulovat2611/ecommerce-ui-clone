import React from "react";

function PopUp(props) {
  return (props.trigger) ? (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-btn">close</button>
      {props.chlidren}
    </div>
  </div>
  ) : "";
}

export default PopUp;
