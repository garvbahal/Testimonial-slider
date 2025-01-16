import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Description = (props) => {
  return (
    <div>
      <div>
        <img src={props.show.image} />
      </div>
      <div>
        <h2>{props.show.name}</h2>
        <p>{props.show.job}</p>
        <FaQuoteLeft />
        <p>{props.show.text}</p>
        <FaQuoteRight />
        <div>
          <button>
            <FaChevronLeft />
          </button>

          <button onClick={props.rightClickHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

export default Description;
