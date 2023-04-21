import React from "react";
import "./Chips.css";
const Chips = ({ color, id, setCategories, categories }) => {
  const handleClick = (categoryId) => {
    const index = categories.indexOf(id);
    categories.splice(index, 1);
    setCategories([...categories]);
  };
  return (
    <div className="chips-container">
      {categories.map((category) => (
        <button
          key={category}
          className="chip-btn"
          style={{
            background: `${color}`,
          }}
          onClick={handleClick}
        >
          {category} <span>X</span>
        </button>
      ))}
    </div>
  );
};

export default Chips;
