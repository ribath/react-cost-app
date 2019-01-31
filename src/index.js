import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import Popper from 'popper.js';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from './Pages/Home.js'
import NotFound from './Pages/NotFound.js'

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/home" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
