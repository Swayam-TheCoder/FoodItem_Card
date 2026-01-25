import Items from "./Items";

const FoodItems = ( { items } ) => {
   
  return (
    <div className='flex justify-center ml-10 mr-10'>
      <ul className='min-w-32 w-sm bg-yellow-100 text-yellow-700 rounded-md shadow-md'>
        {items.map((item) =>
          <Items items={item} handlebuttonclick={() => console.log(`You have bought ${item}`) }></Items>
        )}
      </ul>
    </div>
  )
}

export default FoodItems