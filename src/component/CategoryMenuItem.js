import { BiRupee } from "react-icons/bi";
import { PRODUCT_IMG } from "../utils/constants";

const CategoryMenuItem = ({ itemCards }) => {
  return (
    <ul>
      {itemCards.map((dish) => {
        return (
          <li key={dish?.card?.info?.id}>
            <div className="flex justify-between my-5 border-b p-5">
              <div className="text-xl font-medium text-[#3e4152]">
                {dish?.card?.info?.name}
                <div className="text-base font-normal text-[#3e4152]">
                  <span>
                    <BiRupee className="float-left mt-1" />
                    {dish?.card?.info?.price / 100}
                  </span>
                </div>
                <p className="text-base text-[rgba(40,44,63,.45)] font-light leading-snug mt-4">
                  {dish?.card?.info?.description}
                </p>
              </div>
              <div>
                <img
                  src={PRODUCT_IMG + dish?.card?.info?.imageId}
                  className="h-24"
                />
                <button className="bg-white text-[#60b246] cursor-pointer border border-[d4d5d9] text-sm font-semibold leading-8 rounded-md shadow-md w-24">
                  ADD
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default CategoryMenuItem;
