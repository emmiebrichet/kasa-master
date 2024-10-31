const express = require('express');
const data = require('./data.json')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/properties/:id', (req, res, next) => {
    try {
        const property = data.find(elt => elt.id === req.params.id)
        if(property){
            return res.status(200).json(property)
        }else {
            throw new Error('Not found')
        }

    }catch (e) {
        res.status(404).json(e.message)
    }

})

app.use('/api/properties', (req, res, next) => {
    return res.status(200).json(data);
});

module.exports = app;