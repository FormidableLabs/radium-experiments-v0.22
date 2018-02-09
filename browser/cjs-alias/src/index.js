let Radium = require("radium");
const React = require("react");
const createClass = require("create-react-class");
const ReactDOM = require("react-dom");

// Note: Because we've aliased Radium to `radium/index.js` this works straight
// up.
console.log("Radium object", Radium);

const Composed = createClass({
  render: function () {
    return React.createElement('div', {
      style: {
        background: 'red',
        display: 'flex'
      }
    }, "Radium div!!!");
  }
});

const Wrapped = Radium(Composed);
const App = React.createElement(Wrapped);
console.log("App", App);

ReactDOM.render(App, document.getElementById('app'));