import React from "react";
import Numbers from "./Numbers";

const NumberButton = (numbers) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <button>{numbers}</button>
    </>
  );
};

export default NumberButton;