
import { Fragment, useRef, useState } from 'react';
import './App.css';
import { Multiplicaciones } from './components/multiplicaciones';

function App() {

    const [listResult, setListResult] = useState([]);


    let number = useRef() 
    
  
    const btnCrear = () => {
      let multiplicador =  number.current.value;
      const numbers = [1,2,3,4,5,6,7,8,9,10];
      setListResult((preListResult) => {
        
          return numbers.map((number) => number * multiplicador);
      })

      console.log(listResult);


    }

    const getMultiplicador = () =>{
      return number.current.value;
    }

  return (
    <Fragment>
      <label>Ingresa un numero</label>
      <input id="entrada" ref= {number} type="number"/>
      <button onClick = {btnCrear}>Ok</button>
      <Multiplicaciones listResult = {listResult} multiplicador = {getMultiplicador}/>
    </Fragment>
  );
}

export default App;
