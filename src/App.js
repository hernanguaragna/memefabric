
import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  
  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value);
  }
  const onChangeLinea2 = (e) => {
    setLinea2(e.target.value);
  }
  const onChangeImagen = (e) => {
    setImagen(e.target.value);
  }

  
  return (
    <div className="App">

      
      <select onChange = {onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Phylosoraptor</option>
        <option value="smart">Smart Guy</option>
      

      </select><br/>
      

      <input onChange ={onChangeLinea1}  type= "text" placeholder="Linea 1"/><br/>

      

      <input onChange ={onChangeLinea2} type= "text" placeholder="Linea 2"/><br/>
      
      
      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br/> 
        <img src= {"/img/" + imagen + ".jpg"}/>
        <span>{linea2}</span>
        
      </div>

     
    </div>
  );
}

export default App;
