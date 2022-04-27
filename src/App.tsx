import React, {useState} from 'react';
import './App.css';

const calcul: any = (premierNombre: string, operateur: string, secondNombre: string) => {
    return eval("(" + premierNombre + operateur + secondNombre + ")");
}

const App = () => {
  const [premierNombre, setPremierNombre] = useState("");
  const [secondNombre, setSecondNombre] = useState("");
  const [operateur, setOperateur] = useState("+");
  const [resultat, setResultat] = useState(0);

  return (
    <div className="App">
        <h1>State Calculator </h1>
        <label htmlFor={"premierNombre"}>Premier nombre : </label>
        <input
            type="text" id={"premierNombre"} onChange={event => setPremierNombre(event.target.value)}/>
        <br/>
        <select id={"operateur"} onChange={event => setOperateur(event.target.value)}>
            <option value="+">➕</option>
            <option value="-">➖</option>
            <option value="*">✖️</option>
            <option value="/">➗</option>
        </select>
        <br/>
        <label htmlFor={"secondNombre"}>Second nombre : </label>
        <input
            type="text" id={"secondNombre"}
            onChange={event => setSecondNombre(event.target.value)}
        />
        <br/>
        <button onClick={() => setResultat(calcul(premierNombre, operateur, secondNombre))}
              id={"bouton-egale"} type={"button"}>
            =
        </button>
        <span id={"resultat"}>
            {resultat}
        </span>
    </div>
  );
}

export default App;
