import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recomended</h2>
        <div className="recommended-flex">
          <Button onclickHandler={handleClick} value="" title="All Products" />
          <Button
            onclickHandler={handleClick}
            value="Elektromobil"
            title="Elektromobil"
          />
          <Button onclickHandler={handleClick} value="Sedan" title="Sedan" />
          <Button
            onclickHandler={handleClick}
            value="Yo'ltanlamas"
            title="Yo'ltanlamas"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
