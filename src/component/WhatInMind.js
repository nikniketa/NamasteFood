import React from "react";

const WhatInMind = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-xl">What's on your mind?</h1>
      <div className="flex flex-wrap overflow-x-scroll my-16 border-b-2">
        <ul className="flex-row flex ">
          {data.map((image) => {
            return (
              <li key={image.id} className="w-36 mr-8 justify-between">
                <a>
                  <img
                    className=""
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                      image.imageId
                    }
                  ></img>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WhatInMind;
