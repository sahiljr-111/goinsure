import React from "react";
import { LuArrowRightSquare } from "react-icons/lu";
import { PiWarningCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div className="carrerCard">
      <div className="w-100 carrerImage">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/03/Asana-Logo.png"
          alt="asana"
        />
      </div>
      <div className="carrerText">
        <h4>Asana</h4>
        <span>
          <LuArrowRightSquare size={30} />
        </span>
      </div>
      <div className="hoverEffect">
        <div className="cardButtonGroup">
          <div
            onClick={() => navigate("/carrer-website")}
            className="iconButton"
          >
            <PiWarningCircleFill color="white" className="icon" />
            <p className="text-light text-center">Info</p>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            onClick={() => navigate("/carrier-metrics")}
          >
            <img src="/Images/chart.png" className="icon" />
            <p className="text-light text-center">Metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
