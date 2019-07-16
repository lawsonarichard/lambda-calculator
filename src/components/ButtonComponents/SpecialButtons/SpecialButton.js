import React from "react";
import Specials from "./Specials";
const SpecialButton = (specials) => {
  return (

    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{specials}</button>
    </>
  );
};
export default SpecialButton;