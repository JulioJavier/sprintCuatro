import React from "react";

const DishCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer ">
      <img
        className="rounded-xl w-72 h-44 md:w-48 md:h-32"
        key={props.index + props.name }
        src={props.image}
        alt={props.name}
      />
      <span className="text-slate-800">{props.name}</span>
      <p className="text-slate-500">$ {props.price}.00</p>
    </div>
  );
};
export default DishCard;
