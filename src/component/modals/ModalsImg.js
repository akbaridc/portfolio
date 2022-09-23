import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ModalsImg = ({
  clickImg,
  handleRotationRight,
  handleRotationLeft,
  setClickImg,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImg(null);
    }
  };
  return (
    <>
      <div>
        <div className="overlay">
          <img src={clickImg} alt="bigger" />
          <button
            type="button"
            className="block absolute top-4 right-4 w-10 bg-slate-300 rounded-full dismiss"
            onClick={handleClick}
          >
            <span className="humberger-line rotate-45 origin-top-left ml-[9px]"></span>
            <span className="humberger-line ml-[5px] scale-0"></span>
            <span className="humberger-line -rotate-45 origin-bottom-left ml-[9px]"></span>
          </button>
          <div onClick={handleRotationLeft} className="overlay-arrows_left">
            <FaArrowLeft />
          </div>
          <div onClick={handleRotationRight} className="overlay-arrows_right">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalsImg;
