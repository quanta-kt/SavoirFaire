import React from "react";

const Card = ({ url, des, headline }) => {
  return (
    <>
      <div className="max-w-[70%] w-full flex item-center justify-center m-auto ">
        <div className=" min-w-[90%] card  card-side  bg-base-400 shadow-xl gap-1">
          <figure className="max-w-[20%]">
            <img src={url} alt="img" className="h-[100%]" />
          </figure>
          <div className="card-body px-4 py-1">
            <h2 className="card-title">{headline}</h2>
            <p>{des}</p>
            <div className="card-actions justify-end py-2">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
