import React, { useState } from "react";
import { FaDivide } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";
const Calculator = () => {
  const [val, setValue] = useState("")
  const handleClick = (e) => {
    const t = e;
    console.log(t);
    if (t === "=") {
      setValue(eval(val));
    } else if (t === "AC") {
      setValue("");
    } else if (t === "x") {
      setValue(val.slice(0, -1));
    } else {
      setValue(val + t);
    }
  };
  return (
    <div>
      <div className="w-[400px] h-[600px] bg- m-auto border-4 bg-gray-950 border-black mt-6 rounded-xl">
        <div>
          <input
            type="text"
            value={val}
            className="m-2  p-2  h-[60px] w-[370px] rounded-lg text-3xl font-semibold bg-gray-700 text-white"
          />
        </div>
        <div className="flex justify-space-between mt-4">
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            AC
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            %
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            <div className="ml-1">
            <FaDivide />
            </div>
          </button>
          <button className="calculator-no" onClick={(e) => handleClick('x')} >
          <div className="ml-1"><FaDeleteLeft /></div>
          </button>
        </div>
        <div className="flex justify-space-between">
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)} >
            7
          </button>
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)}>
            8
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            9
          </button>
          <button className="calculator-no" onClick={(e) => handleClick("*")}>
            X
          </button>
        </div>
        <div className="flex justify-space-between">
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            4
          </button>
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)}>
            5
          </button>
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)}>
            6
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            -
          </button>
        </div>
        <div className="flex justify-space-between">
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)}>
            1
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            2
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            3
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            +
          </button>
        </div>
        <div className="flex justify-space-between">
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            00
          </button>
          <button className="calculator-no " onClick={(e) => handleClick(e.target.innerText)}>
            0
          </button>
          <button className="calculator-no" onClick={(e) => handleClick(e.target.innerText)}>
            .
          </button>
          <button className="calculator-no"  onClick={(e) => handleClick(e.target.innerText)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
