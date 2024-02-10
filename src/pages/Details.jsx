import React, { useState, useEffect } from "react";
import Chip from "../components/Chip";
import Housedetails from "../components/Housedetails";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { MdCrisisAlert } from "react-icons/md";
import { useParams } from "react-router";
import {
  getDoc,
  getFirestore,
  query,
  collection,
  doc,
} from "@firebase/firestore";
import { useFirebase } from "../service/firebase";
import images from "./images.json";

function useDetails(propertyId) {
  const app = useFirebase();
  const db = getFirestore(app);

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!db) return;
    const listingQuery = doc(db, "property", propertyId);

    getDoc(listingQuery).then((snap) => {
      setItem({ ...snap.data(), id: snap.id });
    });
  }, []);

  return item;
}

const Details = ({}) => {
  const { propertyId } = useParams();

  const details = useDetails(propertyId);

  return (
    <div>
      {!details && (
        <div className="w-full flex justify-center mt-10">
          <div className="loading loading-dots loading-lg"></div>
        </div>
      )}

      {details && (
        <>
          <div className="flex gap-24 px-10 py-10 justify-center w-full">
            <div className="w-1/3 h-1/2 bg-slate-50 overflow-hidden rounded-md animate-fade-right animate-once animate-duration-1000 animate-delay-300 ">
              <img className="h-full w-full" src={getImage(details.id)} />
            </div>

            <div className=" overflow-y-auto hide-scrollbar px-2 py-2 min-w-[30%] gap-2 animate-fade-left animate-once animate-duration-1000 animate-delay-300">
              <h2 className="card-title px-2 py-2 text-5xl ">
                <FaMagnifyingGlassLocation size={40} />
                {details.property_name}
              </h2>
              <Housedetails Class={"text-2xl flex items-center mb-10"}>
                <MdCrisisAlert size={25} className="self-center" />
                Seller: {details.seller_name}
              </Housedetails>

              {details.size && (
                <Chip
                  Class={"hover:p-[0.2rem] transition-all ease-in duration-1s"}
                >
                  {details.size} BHK
                </Chip>
              )}
              <Chip
                Class={
                  "hover:p-[0.2rem] transition-all ease-in duration-1s flex gap-1"
                }
              >
                Deluxe
              </Chip>
              <Chip>{details.total_sqft} sqft</Chip>
              <Chip>{details.area_type}</Chip>
              <div className="w-full py-5">
                <Housedetails
                  Class={
                    "p-1 text-3xl text-semibold w-fit text-slate-200 rounded-xl"
                  }
                >
                  Starting from ₹{details.price}
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
            <div className="w-64 carousel rounded-box animate-fade-right animate-once animate-duration-1000 animate-delay-300">
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
      )}
    </div>
  );
};

function getImage(id) {
  const inx = (id.charCodeAt(0) ^ id.charCodeAt(1)) % images.length;
  const imgId = images[inx].id;

  return `https://i.imgur.com/${imgId}.jpeg`;
}

export default Details;
