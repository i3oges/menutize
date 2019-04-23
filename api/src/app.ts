import { Application } from 'express';
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
import generate_uid from './routes/generate_uid';
import loc from './routes/location';
import hours from './routes/hours';
import users from './routes/users';
import menu from './routes/menu';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', users);
app.use('/api/v1/generate_uid', generate_uid);
app.use('/api/v1/location', loc);
app.use('/api/v1/hours', hours);
app.use('/api/v1/menu', menu);

module.exports = app;
