import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useResData = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchResDetail();
  }, []);
  const fetchResDetail = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    console.log(data);
    setResData(data);
  };

  return resData;
};
export default useResData;
