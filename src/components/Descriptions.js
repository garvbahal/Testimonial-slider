import React, { useState } from "react";
import Description from "./Description";

const Descriptions = (props) => {
  // let arrayNum = 0;
  const [show, setShow] = useState(props.reviews[0]);

  function rightClickHandler() {
    // ++arrayNum;
    // setShow(props.reviews[props.reviews[arrayNum]]);
  }

  return (
    <div>
      <Description show={show} rightClickHandler={rightClickHandler} />
    </div>
  );
};

export default Descriptions;
