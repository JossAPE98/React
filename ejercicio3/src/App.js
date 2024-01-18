import logo from './logo.svg';
import './App.css';
import Componete from './components/Componete';
import { useState } from 'react';

function App() {
  const[val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));
  return (
    <div>
      <div className="App">
        <h1>Progres bar</h1>
        <Componete width={val} />
        <form>
          <label for="html">Ingrese el porcentaje</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </div>
  );
}

export default App;
