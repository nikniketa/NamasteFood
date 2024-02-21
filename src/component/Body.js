import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { FETCH_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterDdata, setFilterData] = useState();
  const onlineStatus = useOnlineCheck();

  useEffect(() => {
    fetchResList();
  }, []);
  const fetchResList = async () => {
    const response = await fetch(FETCH_API);
    const jsonData = await response.json();
    setResList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (onlineStatus !== "online") {
    return onlineStatus;
  }
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body mx-[15%]">
      <div className="my-4 mx-auto items-center flex justify-center">
        <input
          type="text"
          className="border border-solid"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          type="button"
          className="searchButton"
          onClick={() => {
            const filterData = resList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterData(filterData);
          }}
        >
          Search
        </button>
        <button
          type="button"
          className="filter"
          onClick={() => {
            setFilterData(
              filterDdata.filter((res) => {
                return res?.info?.avgRating >= 4;
              })
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4 justify-center gap-9 m-auto">
        {filterDdata.map((res, i) => {
          return (
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              <ResCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
