import { CARD_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, areaName, cloudinaryImageId } =
    resData.info;
  return (
    <div className="resCard">
      <img src={CARD_IMG + cloudinaryImageId} />
      <div className="cardDescription">
        <h2>{name}</h2>
        <h3>
          {avgRating} Star <span>{sla.deliveryTime} mins</span>
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default ResCard;
