'use strict';

const React = require('react');
const Radium = require('radium');
const { renderToString } = require('react-dom/server');

class Composed extends React.Component {
  render() {
    return React.createElement('div', {
      style: {
        display: 'flex'
      }
    });
  }
}

const Wrapped = Radium(Composed);

const output = renderToString(
  React.createElement(Wrapped, {
    radiumConfig: {
      userAgent: 'no-match-yo'
    }
  })
);

console.log("SSR", output);
