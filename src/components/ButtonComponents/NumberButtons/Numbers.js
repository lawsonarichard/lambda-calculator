import React, { useState } "react";

//import any components needed
import {numbers} from "../../../data.js";
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumber] = useState(numbers);
  return (
    <div>
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
