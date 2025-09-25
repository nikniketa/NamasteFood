import React from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const TopBrands = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-xl">Top restaurant chains in Chhindwara</h1>
      <div className="flex overflow-x-scroll pb-8 mb-8 mt-4 border-b-2">
        <div className="flex justify-center gap-9 m-auto flex-shrink-0">
          {data.map((res) => {
            return (
              <Link
                to={"/restaurant/" + res.info.id}
                key={res.info.id}
                className="w-60"
              >
                <ResCard resData={res} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopBrands;
