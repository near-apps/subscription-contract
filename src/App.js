import React, { useContext, useEffect } from 'react';

import { appStore, onAppMount } from './state/app';

import { Wallet } from './components/Wallet';
import { Contract } from './components/Contract';

import './App.css';

const App = () => {
	const { state, dispatch, update } = useContext(appStore);
    
	const { near, wallet, account, loading } = state;

	const onMount = () => {
		dispatch(onAppMount());
	};
	useEffect(onMount, []);

    console.log(wallet)
    
	if (loading) {
		return <div className="root">
			<h3>Workin on it!</h3>
		</div>;
	}
    
	return (
		<div className="root">
			<Contract {...{ near, update, wallet, account, dispatch }} />
			<Wallet {...{ wallet, account, balance: wallet && wallet.balance }} />
		</div>
	);
};

export default App;
