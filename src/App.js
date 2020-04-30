import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';

class App extends React.Component {
	render() {
		return (
			<div class="App">
				<Cards />
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;
