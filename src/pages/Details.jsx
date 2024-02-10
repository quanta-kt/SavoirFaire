import React from "react";
import Chip from "../components/Chip";
import Housedetails from "../components/Housedetails";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { MdCrisisAlert } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";
const Details = ({
  img,
  property_name,
  seller_name,
  area_type,
  availability,
  price,
  site_location,
}) => {
  return (
    <>
      <div className="flex  gap-1 px-10 py-10 justify-center w-full items-center">
        <div className="w-1/3 h-1/2 bg-slate-50 overflow-hidden rounded-md animate-fade-right animate-once animate-duration-1000 animate-delay-300 ">
          <img
            className="h-full"
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-852918482922249722/original/e9b05964-aa31-4af7-886a-211a07133127.jpeg?im_w=720"
            }
          />
        </div>
        <div className=" overflow-y-auto hide-scrollbar px-2 py-2 min-w-[30%] gap-2 animate-fade-left animate-once animate-duration-1000 animate-delay-300">
          <h2 className="card-title px-2 py-2 text-5xl ">
            <FaMagnifyingGlassLocation size={40} />
            The Crest
          </h2>
          <Housedetails Class={"p-2 text-2xl text-semibold"}>
            Retailer: Ace Realtors
          </Housedetails>
          <Housedetails Class={"p-2 text-2xl flex items-center"}>
            <MdCrisisAlert size={25} className="self-center" />
            Seller:CID
          </Housedetails>
          <Chip
            children={"2BHK"}
            Class={"hover:p-[0.2rem] transition-all ease-in duration-1s"}
          />{" "}
          <Chip
            Class={
              "hover:p-[0.2rem] transition-all ease-in duration-1s flex gap-1"
            }
          >
            Deluxe
          </Chip>
          <Chip>1000 sqft</Chip>
          <Chip>Apartment</Chip>
          <div className="w-full py-5">
            <Housedetails
              Class={
                "p-1 text-3xl text-semibold w-fit text-slate-200 rounded-xl"
              }
            >
              Starting from ₹{223123}/-
            </Housedetails>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-2 flex gap-5 justify-center">
        <div
          className="w-64 carousel rounded-lg  animate-fade-right animate-once animate-duration-1000 animate-delay-300
"
        >
          <div className="carousel-item w-full ">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-48224861/original/abad3982-eea9-488a-aaa1-d122847595ba.jpeg?im_w=720"
              className="w-full "
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
        <div
          className="w-64 carousel rounded-box animate-fade-right animate-once animate-duration-1000 animate-delay-300"
        >
          <div className="carousel-item w-full">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-19712496/original/6e648ff8-9fbc-4a15-bb25-df2b525af4df.jpeg?im_w=720"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>{" "}
        </div>
        <div
          className="w-64 carousel rounded-box animate-fade-right animate-once animate-duration-1000 animate-delay-300
          "
        >
          <div className="carousel-item w-full">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=720"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
