import React, { useCallback, useState } from "react";

const ImageButton = ({ image, imageContent, onClick }) => {
  const [style, setStyle] = useState({
    border: "none",
    color: "#fff",
    width: "200px",
    height: "200px",
  });

  const HandleHover = useCallback(() => {
    setStyle({
        width: "220px",
        height: "220px",
        boxShadow:" 0 15px 15px -10px rgba(0,0,0, .5)"
    });
  }, []);
  const mouseLeave = useCallback(() => {
    setStyle({
      border: "none",
      color: "#fff",
      width: "200px",
      height: "200px",
    });
  }, []);
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          height: "250px",
          width: "250px",
          border: "none",
          color: "#fff",
        }}
        onMouseEnter={HandleHover}
        onMouseLeave={mouseLeave}
      >
        <img src={image} alt={""} style={style} />
        {}
      </button>
    </div>
  );
};

export default ImageButton;
