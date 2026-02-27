import React, { useState } from "react";
import FoodItems from "./components/Food/FoodItems";
import Errormsg from "./components/Food/Errormsg";
import Foodinput from "./components/Food/Foodinput";
const App = () => {
  // const foodItems = [];
  let [foodItems , setfoodItem] = useState([]);

  const Keydown = (event) => {
    if(event.key === "Enter"){
      let newitems = event.target.value;
      let updatedfooditems = [...foodItems , newitems];
      setfoodItem(updatedfooditems);
      event.target.value = "";
    }
    
}
  return (
    <div>
      <div className="border border-gray-400 m-4 p-4 w-sm min-w-0 mx-auto bg-yellow-50">
        <h1 className="text-center p-3 text-red-700 font-medium text-2xl">
          Healthy Food
        </h1>
        <Foodinput Keydown={Keydown}></Foodinput>
        <Errormsg items={foodItems}></Errormsg>
        <FoodItems items={foodItems}></FoodItems>
      </div>
    </div>
  );
};

export default App;
