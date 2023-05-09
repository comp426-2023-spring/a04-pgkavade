#!/usr/bin/env node

import {rpslsGame, rpsGame} from './lib/rpsls.js';
import minimist from "minimist";
import express from 'express';

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app', function(req, res) {
    res.status(200).send("200 OK");
});
app.get('/app/rps', function(req, res) {
    res.status(200).send(rpsGame());
});
app.get('/app/rpsls', function(req, res) {
    res.status(200).send(rpslsGame());
});

app.get('/app/rps/play', function(req, res) {
    res.status(200).send(rpsGame(req.query.shot));
});
app.get('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpslsGame(req.query.shot));
});
app.post('/app/rps/play', function(req, res) {
    res.status(200).send(rpsGame(req.body.shot));
});
app.post('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpslsGame(req.body.shot));
});

app.get('/app/rps/play/:shot', function(req, res) {
    res.status(200).send(rpsGame(req.params.shot));
});
app.get('/app/rpsls/play/:shot', function(req, res) {
    res.status(200).send(rpslsGame(req.params.shot));
});

app.get('*', function(req, res){
      res.status(404).send('404 NOT FOUND');
});
app.listen(port, () => {

});