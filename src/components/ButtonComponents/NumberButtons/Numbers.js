import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed
import { numbers } from "../../../data";
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div class="numbersButton">
  
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map((number) => NumberButton (number))}
    </div>
  );
};
export default Numbers;