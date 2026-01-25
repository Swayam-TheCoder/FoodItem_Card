import React from "react";

const Items = ({ items , handlebuttonclick}) => {

  // const handlebuttonclick = () => {
  //   console.log(`You have bought ${items}`) 
  // }

  return (
    <div>
      <li
        key={items}
        className="p-4 border-0  border-gray-300 text-center font-medium">
        {items}
          <button className="bg-sky-400 text-black p-1 rounded-md w-12 float-right" onClick={handlebuttonclick}>
            Buy
          </button>
      </li>
    </div>
  );
};

export default Items;
