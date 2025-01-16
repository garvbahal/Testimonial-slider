import React, { useEffect, useState } from "react";
import Description from "./Description";

const Descriptions = (props) => {
  const [arrayNum, setArrayNum] = useState(0);
  const [show, setShow] = useState(props.reviews[arrayNum]);

  function rightClickHandler() {
    setArrayNum(arrayNum === props.reviews.length - 1 ? 0 : arrayNum + 1);
  }

  function leftClickHandler() {
    setArrayNum(arrayNum === 0 ? props.reviews.length - 1 : arrayNum - 1);
  }

  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function surpriseButton() {
    let randomInt = arrayNum;
    while (randomInt === arrayNum) {
      randomInt = generateRandomInteger(0, props.reviews.length);
    }
    setArrayNum(randomInt);
  }

  useEffect(() => {
    setShow(props.reviews[arrayNum]);
  }, [arrayNum]);

  return (
    <div className="relative bg-white rounded-md p-10 w-[85vw] md:w-[700px] mt-10 shadow-md hover:shadow-xl transition-all duration-700">
      <Description
        show={show}
        rightClickHandler={rightClickHandler}
        surpriseButton={surpriseButton}
        leftClickHandler={leftClickHandler}
      />
    </div>
  );
};

export default Descriptions;
