import React, { useCallback, useEffect} from 'react'

function FoodItems() {

  const fecthData = useCallback((async () => {

  }), [])

  useEffect((() => {
    fecthData();
  }), [fecthData])

  
  return (
    <div className=' mt-[3rem] lg:gap-9 gap-4  mx-auto   w-[90vw] flex flex-col'>
     <p>Curated Collections</p>
     <div>
      <img></img>
      <p></p>
     </div>
    </div>
  )
}

export default FoodItems
