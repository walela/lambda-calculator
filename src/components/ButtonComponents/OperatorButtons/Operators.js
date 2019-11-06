import React from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState] = React.useState(operators);
  return (
    <div>
      {operatorState.map(operator => (
        <OperatorButton char={operator.char} key={operator.value} />
      ))}
    </div>
  );
};

export default Operators;
