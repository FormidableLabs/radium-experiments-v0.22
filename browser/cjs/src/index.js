let Radium = require("radium");
const React = require("react");
const createClass = require("create-react-class");
const ReactDOM = require("react-dom");

// Note: This is our one "gotcha" -- webpack is using `package.json:module` and
// using `es/index.js` with only a `default` not a root export.
console.log("Radium object", Radium);
// ... so we patch that here ...
Radium = Radium.default;
console.log("(Patched) Radium object", Radium);

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