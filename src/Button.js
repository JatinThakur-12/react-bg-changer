import React from "react";

function Button({ color, click, textColor = "White" }) {
  const handleClick = () => {
    click(color);
  };

  return (
    <button
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{ backgroundColor: color, color: textColor, fontWeight: "normal" }}
      onClick={handleClick}
    >
      {color}
    </button>
  );
}

export default Button;
