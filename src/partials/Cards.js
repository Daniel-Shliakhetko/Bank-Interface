import React from "react";
import { useState } from "react";

import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../hooks/useWindowSize"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../App.scss";

export const Cards = (props) => {
  const size = useWindowSize();
  return (
    <Swiper
      slidesPerView={size.width < 700 ? 1 : 2}
      spaceBetween={70}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      {props.cards.map((card, i) => (
        <SwiperSlide>
          <Card key={i} card={card} background={card.background} />
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
};

export const Card = (props) => {
  const { card, background } = props;
  const className =
    "min-h-[10rem] min-w-20 max-w-30 rounded-xl p-4 mr-8 relative cursor-pointer bg-" +
    background;

  let parsedNumber = [];

  for (let i = 0; i < 4; i++) {
    parsedNumber.push([]);
    for (let j = 0; j < 4; j++) {
      parsedNumber[i].push(card.cardNumber[i * 4 + j]);
    }
  }

  const [isNumberShowed, toggleNumber] = useState(false);

  return (
    <div
      className={className}
      style={{ "max-width": "20rem", "min-width": "20rem" }}
      onClick={() => toggleNumber(!isNumberShowed)}
    >
      <span className="uppercase">{card.bank}</span>
      <CardDots data={parsedNumber} show={isNumberShowed} />
      <span className="text-xl uppercase absolute w-fit left-4 bottom-4">
        {card.name} {card.surname}
      </span>
      <MasterCard />
    </div>
  );
};

const CardDots = (props) => {
  const data = props.data;
  const classes = props.show
    ? "flex justify-between mt-8 translate-y-[-0.5rem]"
    : "flex justify-between mt-8";

  // {classes +  : ''}

  return (
    <div className={classes}>
      {data.map((row, i) => (
        <CardDotsRow key={i} row={row} show={props.show} />
      ))}
    </div>
  );
};

const CardDotsRow = (props) => {
  return (
    <div className="flex space-x-2">
      {props.row.map((item, i) => (
        <CardDot key={i} data={item} show={props.show} />
      ))}
    </div>
  );
};

const CardDot = (props) => {
  const dotClasses = "rounded-full h-2 w-2 bg-white";

  return !props.show ? (
    <div className={dotClasses} data={props.data}></div>
  ) : (
    <span className="font-semibold">{props.data}</span>
  );
};

const MasterCard = () => {
  return (
    <div className="absolute w-fit right-8 bottom-4">
      <div className="relative h-8 w-8 opacity-60 rounded-full bg-space-cadet"></div>
      <div className="absolute top-0 left-[50%] h-8 w-8 opacity-60 rounded-full bg-space-cadet"></div>
    </div>
  );
};
