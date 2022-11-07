import { useState } from 'react';
import './App.css';
import Price from './components/Price';

function App() {

  const pprice = 100

  const [zam,setZam] = useState(pprice)

  const [count,setCount] = useState(0)


  return (
    <div className="App">
      <h1>Exam Question Working Succesfully</h1>
      <h1>Initial Value:{pprice}</h1>

      <Price Zam = {zam} setZam = {setZam} count = {count} setCount={setCount}/>
    </div>
  );
}

export default App;
