import React from "react";
import Chip from "./Chip";

const Card = ({ url, description, headline, labels }) => {
  return (
    <>
      <div className="card card-side bg-base-400 shadow-xl ">
        <figure className="w-[30%]">
          <img className="h-[100%] object-cover" src={url} alt="img" />
        </figure>

        <div className="card-body py-4">
          <h2 className="card-title">{headline}</h2>
          <p>{description}</p>
          <div className="mt-1">
            {labels?.map((it) => (
              <Chip>{it}</Chip>
            ))}
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
