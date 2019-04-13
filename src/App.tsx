import * as React from 'react';
import './App.css';
import Params from "./components/Params/container";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Params/>
      </div>
    );
  }
}

export default App;
