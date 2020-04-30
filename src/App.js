import React from 'react';
import { Cards, Chart, Country } from './Components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {
	async componentDidMount() {
		const data = await fetchData();

		console.log(data);
	}

	render() {
		return (
			<div className={styles.container}>
				<Cards />
				<Country />
				<Chart />
			</div>
		);
	}
}

export default App;
