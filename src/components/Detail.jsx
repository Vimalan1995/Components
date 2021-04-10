import React from "react";
import contacts from "../contacts";

function Detail(props) {
  return (
    <div>
      <p className="info">{props.info}</p>
    </div>
  );
}

export default Detail;
