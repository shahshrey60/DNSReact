import './App.css';
import {useState}  from 'react';
function App() {
  const[bind,bindto]=useState('??');
  const[bino,binoct]=useState('??');
  const[bihex,binhex]=useState('??');
  const[binary,binnew]=useState('11100')
  const bintodec = () => {
  bindto(parseInt(binary, 2));
  }
  const bintoct = () => {
    let bo=parseInt(binary, 2);
    let boct=bo.toString(8)
    binoct(boct); 
    }
  const binthex = () => {
      let bh=parseInt(binary, 2);
      let bhex=bh.toString(16)
      binhex(bhex.toUpperCase()); 
      }
      //
      document.getElementById("binarybutton").onclick=function(){
        let binu=document.getElementById("binary").value
        binnew(binu)
      }
  return (
    <div className="App">
      <label><h1>Binary :</h1></label>
      <input type="text" id="binary" placeholder="Binary"></input>
      <button type="button" id="binarybutton">Click</button>
      <h1>
      <button onClick={bintodec}>Decimal</button>
          <span> -> : {bind} </span>
      </h1>
      <h1>
      <button onClick={bintoct}>Octal</button>
          <span> -> : {bino} </span>
      </h1>
    
      <h1>
      <button onClick={binthex}>Hexadecimal</button>
          <span> -> : {bihex}</span>
      </h1>
    </div>
  );
}
export default App;