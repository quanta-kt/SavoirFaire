import React from "react";
import Card from "../components/Card";

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

function Listing() {
  return (
    <div className="mx-60 min-h-screen">
      <div className="grid grid-cols-2 gap-8">
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
