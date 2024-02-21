import { CARD_IMG } from "../utils/constants";
import { MdStars } from "react-icons/md";

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla,
    areaName,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData.info;
  console.log(resData.info);
  return (
    <div className="grid grid-flow-row gap-3">
      <div
        className="relative shadow-md h-44 w-full bg-cover rounded-2xl"
        style={{ backgroundImage: "url(" + CARD_IMG + cloudinaryImageId + ")" }}
      >
        {/* <img src={CARD_IMG + cloudinaryImageId} className="w-full" /> */}
        <div className="absolute bottom-0 text-white text-xl font-extrabold px-3 pb-2 bg-gradient-to-bl from-[#e7ebf400] to-[#131416] w-full rounded-b-2xl pt-10">
          {aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.header}
          {aggregatedDiscountInfoV3?.subHeader &&
            aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      <div className="cardDescription">
        <h2 className="text-lg font-bold leading-6 max-h-6 overflow-hidden line-clamp-1 ">
          {name}
        </h2>
        <h3 className="text-base leading-5 font-bold">
          <MdStars className="float-left text-xl text-green-600" /> {avgRating}{" "}
          . {sla.deliveryTime} mins
        </h3>
        <h4 className="text-base leading-5 max-h-5 overflow-hidden line-clamp-1  text-gray-500">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-500">{areaName}</h4>
      </div>
    </div>
  );
};

export default ResCard;
