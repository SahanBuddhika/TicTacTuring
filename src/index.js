import React from 'react'
import ReactDOM from 'react-dom'


var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(<div><h1>Hellow World</h1></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

