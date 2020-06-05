import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
	console.log(`cards data:`, props);
	return (
		<div className="styles.container">
			<Grid container spacing={3} justify="center">
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5" />
						<Typography color="textSecondary">DATTEEEE!!!</Typography>
						<Typography variant="body2">Number of active cases of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">DATAAAA!!!</Typography>
						<Typography color="textSecondary">DATTEEEE!!!</Typography>
						<Typography variant="body2">Number of recoveries from COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">DATAAAA!!!</Typography>
						<Typography color="textSecondary">DATTEEEE!!!</Typography>
						<Typography variant="body2">Number of deaths from COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
