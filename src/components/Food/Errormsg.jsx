import React from 'react'
const Errormsg = ( {items} ) => {

  return (
    <div>
      {items.length === 0 && <h3 className='text-center p-3 m-9 text-2xl'>No food items available</h3>}
    </div>
  )
}

export default Errormsg