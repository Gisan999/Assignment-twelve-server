const cors = require('cors');
const express = require('express');

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            'https://final-project-d65ce.web.app',
            'https://final-project-d65ce.firebaseapp.com',
            'http://localhost:5173'
        ]
    }));
    app.use(express.json());
};

module.exports = applyMiddleware;