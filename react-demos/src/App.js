import React from 'react';
import './App.css';
import TButton from './components/button';
import Counter from './components/counter';
import IInput from './components/Input';
import Pure from './components/purecomponent';

const myComponents = {
  DatePicker: function(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <myComponents.DatePicker color="blue" />;
}

function App() {

  return (
    <div className="App">
      <TButton />
      <Counter />
      <IInput />
      <Pure />
      {BlueDatePicker()}
    </div>
  );
}

export default App;
