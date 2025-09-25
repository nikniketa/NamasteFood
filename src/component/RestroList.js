import React from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";

const RestroList = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-xl">
        Restaurants with online food delivery in Chhindwara
      </h1>
      <div className="flex pb-8 mb-8 mt-4 border-b-2">
        <div className="grid grid-cols-4 justify-center gap-9 m-auto">
          {data.map((res, i) => {
            return (
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                <ResCard resData={res} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestroList;
