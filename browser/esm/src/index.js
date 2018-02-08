import Radium from "radium";
import React from "react";
import ReactDOM from "react-dom";

console.log("Radium object", Radium);

class Composed extends React.Component {
  render() {
    return React.createElement('div', {
      style: {
        background: 'red',
        display: 'flex'
      }
    }, "Radium div!!!");
  }
}

const Wrapped = Radium(Composed);
const App = React.createElement(Wrapped);
console.log("App", App);

ReactDOM.render(App, document.getElementById('app'));
