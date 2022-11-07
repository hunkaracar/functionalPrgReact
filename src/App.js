import { useState } from 'react';
import './App.css';
import Price from './components/Price';
import ProductAdd from './components/ProductAdd';

function App() {

    const Pdata = [
    {id:1,ProductName:"Computer",Price:13000},
    {id:2,ProductName:"RAM",Price:3000},
    {id:3,ProductName:"SSD",Price:1000},
    {id:4,ProductName:"Mouse",Price:100}
]


  const pprice = 13000

  const [zam,setZam] = useState(pprice)

  const [count,setCount] = useState(0)

  const [value,setValue] = useState(Pdata)

  console.log(Pdata)

  const handleAllDelete = () =>{
    setValue([])
    console.log(Pdata)
  }


  return (
    <div className="App">
      <h1>Exam Question Working Succesfully</h1>
      <h1>Initial Value:{pprice}</h1>

      <Price Zam = {zam} setZam = {setZam} count = {count} setCount={setCount}/>
      <ProductAdd valuee = {value} setValue={setValue}/>
      <button onClick={handleAllDelete}>Delete ALL</button>
    </div>
  );
}

export default App;
