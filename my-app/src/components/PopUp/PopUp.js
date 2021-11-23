import React, { useEffect, useRef } from "react";
import "./PopUp.scss";

function PopUp(props) {
  let modelRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    });
  });

  return props.trigger ? (
    <div className="popup">
      <div ref={modelRef} className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.chlidren}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
