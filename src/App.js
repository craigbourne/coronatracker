import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';

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
