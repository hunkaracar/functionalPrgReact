import React from 'react'
import Products from './Products'


export default function ProductAdd({ valuee, setValue }) {




    return (
        <div>
            <h1>------------------------------------------------------------------</h1>
            <h3>
                Products List {valuee.length}

                {
                    valuee.map((val) => (<>
                        <Products values={val} />
                    </>))
                }

            </h3>



            <p></p>


        </div>
    )
}
