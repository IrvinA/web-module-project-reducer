import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { 
  applyNumber, 
  changeOperation, 
  clearDisplay,
  saveMemory,
  returnMemory,
  resetMemory
} from './actions';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  // const plusOne = () => {
  //   dispatch(addOne());
  // }

  const numberHandler = (number) => {
    dispatch(applyNumber(number));
  }

  const operationHandler = (operator) => {
    dispatch(changeOperation(operator));
  }

  const displayHandler = () => {
    dispatch(clearDisplay());
  }

  const memoryHandler = () => {
    dispatch(saveMemory());
  }

  const displayMemory = () => {
    dispatch(returnMemory());
  }

  const clearMemory = () => {
    dispatch(resetMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => memoryHandler()}/>
              <CalcButton value={"MR"} onClick={() => displayMemory()}/>
              <CalcButton value={"MC"} onClick={() => clearMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => numberHandler(1)}/>
              <CalcButton value={2} onClick={() => numberHandler(2)}/>
              <CalcButton value={3} onClick={() => numberHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberHandler(4)}/>
              <CalcButton value={5} onClick={() => numberHandler(5)}/>
              <CalcButton value={6} onClick={() => numberHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberHandler(7)}/>
              <CalcButton value={8} onClick={() => numberHandler(8)}/>
              <CalcButton value={9} onClick={() => numberHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandler("+")}/>
              <CalcButton value={"*"} onClick={() => operationHandler("*")}/>
              <CalcButton value={"-"} onClick={() => operationHandler("-")}/>
            </div>

            <div className="row">
              <CalcButton value={"/"} onClick={() => operationHandler("/")}/>
              <CalcButton value={"^"} onClick={() => operationHandler("^")}/>
              <CalcButton value={"!"} onClick={() => operationHandler("!")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => displayHandler()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
