import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { FETCH_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterDdata, setFilterData] = useState();

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
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
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
            setResList(
              resList.filter((res) => {
                return res.info.avgRating > 4;
              })
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resContainer">
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
