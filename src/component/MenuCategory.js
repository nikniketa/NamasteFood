import CategoryMenuItem from "./CategoryMenuItem";

const MenuCategory = ({ data }) => {
  const { title, itemCards } = data;

  if (!title || !itemCards) {
    return "Loading...";
  }
  return (
    <div className="float-left w-full mt-5">
      <h2>
        {title}({itemCards.length})
      </h2>
      <CategoryMenuItem itemCards={itemCards} />
    </div>
  );
};

export default MenuCategory;
