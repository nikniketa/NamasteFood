import CategoryMenuItem from "./CategoryMenuItem";

const MenuCategory = ({ category, show, setShowIndex }) => {
  const { title, itemCards } = category.card.card;
  const handleAccordion = () => {
    setShowIndex();
  };
  return (
    <div className="float-left w-full mt-5 border-t-8 p-3">
      <button onClick={() => handleAccordion()}>
        <h2 className="font-bold cursor-pointer">
          {category.card.card.title}({itemCards.length})
        </h2>
      </button>
      {show && <CategoryMenuItem itemCards={itemCards} />}
    </div>
  );
};

export default MenuCategory;
