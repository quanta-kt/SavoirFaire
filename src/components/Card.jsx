import React from "react";
import Chip from "./Chip";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({
  url,
  description,
  headline,
  labels,
  seller,
  area,
  price,
  item,
  onClick,
  onClickLocationView,
}) => {
  return (
    <>
      <div
        className="card card-side glass bg-base-400 shadow-xl
                  animate-fade-up animate-duration-500 animate-ease-linear"
      >
        <figure className="min-w-[30%]">
          <img
            onClick={onClick}
            className="h-[100%] object-cover scale-[1.5] cursor-pointer"
            src={url}
            alt="img"
          />
        </figure>

        <div className="card-body py-4">
          <a
            className="card-title cursor-pointer hover:underline"
            onClick={onClick}
          >
            {headline}
          </a>
          <span className="flex gap-4 items-center justify-start flex-wrap">
            <span>{description}</span> |
            <span className="flex gap-2 items-center justify-start">
              <FaLocationDot />
              {area}
            </span>{" "}
            |{" "}
            <span>
              <b>₹ {price}</b>
            </span>
          </span>
          <div className="mt-4">
            {labels?.map((it) => (
              <Chip>{it}</Chip>
            ))}
          </div>

          <div className="card-actions justify-between">
            <div className="flex flex-col">
              {seller && (
                <p className="text-lg">
                  Sold by: <b>{seller}</b>
                </p>
              )}
            </div>

            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onClickLocationView(e);
              }}
            >
              <FaLocationDot />
              View location
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
