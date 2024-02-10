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
}) => {
  return (
    <>
      <div
        className="card card-side glass bg-base-400 shadow-xl
                  animate-fade-up animate-duration-500 animate-ease-linear"
      >
        <figure className="w-[30%]">
          <img className="h-[100%] object-cover" src={url} alt="img" />
        </figure>

        <div className="card-body py-4">
          <h2 className="card-title">{headline}</h2>
          <span className="flex gap-4 items-center justify-start">
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

            <button className="btn btn-primary">
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
