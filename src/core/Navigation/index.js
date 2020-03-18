import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageNotFound from '../../Screens/PageNotFound';
import EditCard from '../../Screens/EditCard';
import AddCard from '../../Screens/AddCard';
import MyCards from '../../Screens/MyCards';

import { BASE, ADD, EDIT } from './constants';

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={BASE} component={MyCards} />
				<Route exact path={ADD} component={AddCard} />
				<Route exact path={EDIT} component={EditCard} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default Navigation;
