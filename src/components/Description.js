import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Description = (props) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="z-1 rounded-full w-[140px] relative aspect-square md:absolute md:-top-[120px] md:left-[10px] ">
        <img src={props.show.image} className=" rounded-full absolute z-30 " />
        <div className="-top-[6px] left-[10px] absolute w-[140px] aspect-square rounded-full bg-violet-500"></div>
      </div>
      <div className="flex flex-col items-center relative">
        <h2 className="font-bold text-lg md:text-2xl capitalize tracking-wider mt-[28px] text-center">
          {props.show.name}
        </h2>
        <p className=" text-violet-300 uppercase text-sm mb-[20px] text-center">
          {props.show.job}
        </p>
        <FaQuoteLeft color="#a78bfa" />
        <p className=" mt-[16px] mb-[20px] text-center text-slate-500">
          {props.show.text}
        </p>
        <FaQuoteRight color="#a78bfa" />
        <div className=" mt-[40px] flex gap-5  text-violet-400 text-3xl">
          <button
            className=" hover:text-violet-500 transition-all duration-200 "
            onClick={props.leftClickHandler}
          >
            <FaChevronLeft fontSize={20} />
          </button>

          <button
            className=" hover:text-violet-500 transition-all duration-200"
            onClick={props.rightClickHandler}
          >
            <FaChevronRight fontSize={20} />
          </button>
        </div>
        <button
          className="mt-5 bg-violet-400 hover:bg-violet-500 shadow-md cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg transition-all duration-200"
          onClick={props.surpriseButton}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Description;
