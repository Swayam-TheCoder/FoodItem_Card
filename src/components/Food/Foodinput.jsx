import React from "react";

const Foodinput = ( {Keydown} ) => {

  return (
    <input
      type="text"
      className="border border-gray-400 p-2 rounded-md w-xs min-w-0 mx-auto mt-4 mb-4 ml-4 outline-0 bg-yellow-200"
      placeholder="Enter food item here"
      onKeyDown={Keydown}
    />
  );
};

export default Foodinput;
