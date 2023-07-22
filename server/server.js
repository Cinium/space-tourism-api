const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const { crewData } = require('./data/membersData');
const { techData } = require('./data/techData');
const { planetsData } = require('./data/planetsData');
const { corsOptions } = require('./cors-options');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/members', (req, res) => {
	res.json(crewData);
});

app.get('/techs', (req, res) => {
	res.json(techData);
});

app.get('/planets', (req, res) => {
	res.json(planetsData);
});

app.get('/images/:imgs', (req, res) => {
	const imgsGroup = req.params['imgs'];
	const pathToImgs = path.join(__dirname, 'assets', imgsGroup + '-images');

	fs.readdir(pathToImgs, (e, files) => {
		res.json(files);
	});
});

app.use('*', (req, res) => {
	res.status(404).send('Not Found');
});

app.listen(port, () => {
	console.log(`Server is online on port: ${port}`);
});
