import React from 'react'

export default function Price({Zam,setZam,count,setCount}) {



    function handleClickRaise() {
    if (count === 0){
        setCount(count+1)
    }
    else
    {
        return 0;
    }

    setZam(Zam+Zam*0.2);
  }  


  return (
    <div>
        <h3>Raise Calculate</h3>
        <p>Hesaplanan zam degeri={Zam}</p>
        <button className='btn btn-danger' onClick={handleClickRaise}>RaiseCalct</button>

    </div>


  )
}
