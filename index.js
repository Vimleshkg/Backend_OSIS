const express = require('express');
const mongoose = require('mongoose');
const { getByRadius, getByRadiusRange } = require('./controller/controller');

//for authentication..
const jwt = require('jsonwebtoken');
const secretKey = 'OSOS'

const PORT = 8081;
const server = express();

server.use(express.json());

const dbUrl = 'mongodb+srv://Vimleshg:Vimu55333g@cluster0.699kndo.mongodb.net/GeospatialData?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbUrl)
    .then(() => console.log('connected succesfully'))
    .catch((err) => console.log(err));


function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(403);

    jwt.verify(token, secretKey, (err, user) => {
        if (err)
            return res.sendStatus(403);

        req.user = user;
        next();
    });
}

server.post('/login', (req, res) => {
    const user = req.body;

    const token = jwt.sign(user, secretKey);
    res.json({ token });

});

server.get('/user', authenticationToken, (req, res) => {
    res.json({
        message: 'Authentication Successfull',
        user: req.user
    })
});

server.use(authenticationToken); // Middleware applied to all routes below

server.get('/byRadius', getByRadius);
server.get('/byRadiusRange', getByRadiusRange);



server.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log('listening ' + PORT);
});
