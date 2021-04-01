import './App.css';

import Converter from './Components/Converter'

function App() {
  return (
    <div className="App">
      <h1>Conver$or de Moeda$</h1>

      <div className="line">
        <Converter currentyA="USD" currentyB="BRL"></Converter>
        <Converter currentyA="BRL" currentyB="USD"></Converter>
      </div>

      <div className="line">
        <Converter currentyA="CAD" currentyB="BRL"></Converter>
        <Converter currentyA="BRL" currentyB="CAD"></Converter>
      </div>

      <div className="line">
        <Converter currentyA="EUR" currentyB="BRL"></Converter>
        <Converter currentyA="BRL" currentyB="EUR"></Converter>
      </div>

      <div className="line">
        <Converter currentyA="GBP" currentyB="BRL"></Converter>
        <Converter currentyA="BRL" currentyB="GBP"></Converter>
      </div>
    </div>
  );
}

export default App;
