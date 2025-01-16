import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Description = (props) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div>
        <img
          src={props.show.image}
          className="rounded-full w-[140px] aspect-square object-cover absolute -top-[120px] left-[10px]"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <h2 className="font-bold text-lg md:text-2xl capitalize tracking-wider mt-[28px] text-center">
          {props.show.name}
        </h2>
        <p className=" text-violet-300 uppercase text-sm mb-[20px] text-center">
          {props.show.job}
        </p>
        <FaQuoteLeft />
        <p className="">{props.show.text}</p>
        <FaQuoteRight />
        <div>
          <button onClick={props.leftClickHandler}>
            <FaChevronLeft />
          </button>

          <button onClick={props.rightClickHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={props.surpriseButton}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Description;
