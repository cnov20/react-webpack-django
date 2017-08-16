
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/presentation/home.jsx';
import About from './components/presentation/about.jsx';

// routes
ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
		</div>
	</BrowserRouter>,
	document.getElementById('react-app')
);