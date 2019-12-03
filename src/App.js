import React,{useState} from 'react';
import Button from "./components/Button"


function App() {

  const [count,setCount]=useState(0)

  const incrementCount=x=>{
    setCount(count+x)
  }
  return (
    <div >
  <h1>Hello world</h1>
  <Button increment={1} onClickFunction={incrementCount}/>
  
  <Button increment={10} onClickFunction={incrementCount}/>
  <Button increment={100} onClickFunction={incrementCount}/>
  <Button increment={1000} onClickFunction={incrementCount}/>
  <span>{count}</span>
    </div>
  );
}

export default App;
