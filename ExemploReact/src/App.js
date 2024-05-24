import {useState} from 'react';
import Header from './components/Header';
import Footer from '.components/Footer/Footer';

function App() {

const[counter, setCounter] = useState(0);

function incrementCounter() {
  setCounter(counter +1);
}
  

  return (
    <>
      <Header title="Meu titulo"/>

      <div>
      <h1>Contador: {counter}</h1>
  <button onClick={incrementCounter}>Incrementar</button>
  
    </div>

    </>
  );
}

export default App;
