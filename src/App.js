import React from 'react';
import { Cards, Chart, Country } from './Components';

class App extends React.Component {
	render() {
		return (
			<div class="App">
				<Cards />
				<Country />
				<Chart />
			</div>
		);
	}
}

export default App;
