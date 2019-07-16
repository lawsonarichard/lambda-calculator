import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed
import { operators } from "../../../data.js";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  return (
    <div class="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((operators) => OperatorButton (operators))}
    </div>
  );
};

export default Operators;