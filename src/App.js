import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Slide from './components/Slide';
import Footer from './components/Footer';




function App() {
  return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Header />
					<Home />
					<Slide />
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
