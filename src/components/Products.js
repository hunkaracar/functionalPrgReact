import React from 'react'

export default function Products({values}) {
  return (
    <div>
        <h1>Products</h1>
        {values?.ProductName} {values?.Price}
        <button>Select</button> 
        

    </div>
  )
}

