// load REACT
import React from 'react';
// load Document Object Models, the HTML elements on the page.  It's possible to
// parse the HTML objects and put into tree structure.  It creates a duplicate DOM
// there is one DOM hierarcy in the browser, and one in REACT.  REACT can access it
// faster
import ReactDOM from 'react-dom';
import './index.css';
// load our REACT component
import App from './App';
// load a library that helps REACT (and node.js) load quickly when offline or slow
// network.  It caches data
import registerServiceWorker from './registerServiceWorker';

// render our component INTO the element called 'root' element in index.html
//ReactDOM.render(<App />, document.getElementById('root'));

//this is a single object that is being passed in with multiple properties
const myProps = {
    testProp: 'quux'
};
var root = document.getElementById('root');

//DO NOT CALL <App> twice.  REACT doesn't like to call it twice.
// put more values inside as below.
ReactDOM.render(
    <div>
        <App myProps={myProps} fooProp={2} />

    </div>,
    document.getElementById('root')
);

registerServiceWorker();
