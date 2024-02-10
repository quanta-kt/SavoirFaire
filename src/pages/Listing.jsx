import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const landArray = [
  {
    url: "https://example.com",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48224861/original/ea78d580-d19d-49e2-8657-f01154e786ca.jpeg?im_w=720",
    des: "Details for item 1.",
    headline: "Information about land 1.",
  },
  {
    url: "https://example.com",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52960006/original/6e21b2e3-4a50-44f7-9641-dc9ae2e2ef4e.jpeg?im_w=720",
    des: "Details for item 2.",
    headline: "Information about land 2.",
  },
  {
    url: "https://example.com",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52960006/original/6e21b2e3-4a50-44f7-9641-dc9ae2e2ef4e.jpeg?im_w=720",
    des: "Details for item 3.",
    headline: "Information about land 3.",
  },
];

function Filters({}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col gap-3 justify-start items-start w-full mb-5">
      <div className="flex w-full gap-3">
        <Button onClick={() => setShowFilters((it) => !it)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
        />
      </div>

      {showFilters && (
        <div className=" flex flex-col gap-1 w-full">
          <div className="flex gap-3 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Order by</span>
              </div>

              <select className="select select-bordered w-full">
                <option disabled selected>
                  None
                </option>
                <option>Proximity</option>
                <option>Price</option>
                <option>Rating</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Filter by type</span>
              </div>

              <select className="select select-bordered">
                <option disabled selected>
                  All
                </option>
                <option>{"For sale"}</option>
                <option>{"For rent"}</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Filter by distance</span>
              </div>

              <select className="select select-bordered">
                <option disabled selected>
                  All
                </option>
                <option>{"< 5km"}</option>
                <option>{"< 10km"}</option>
                <option>{"< 30km"}</option>
                <option>{"< 50km"}</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Filter by range</span>
              </div>

              <select className="select select-bordered">
                <option disabled selected>
                  All
                </option>
                <option>{"< 15L"}</option>
                <option>{"< 25L"}</option>
                <option>{"< 50L"}</option>
                <option>{"< 1Cr"}</option>
                <option>{"1Cr+"}</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

function Listing() {
  return (
    <div className="lg:mx-60 mx-4 min-h-screen">
      <Filters />
      <div className="grid lg:grid-cols-2 gap-8">
        {landArray.map((item) => {
          return (
            <Card
              description={item.des}
              headline={item.headline}
              url={item.image}
              labels={["2BHK", "Fully furnished"]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Listing;
