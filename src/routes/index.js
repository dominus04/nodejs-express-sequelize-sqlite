const express = require('express');
const persons = require('./personsRoute.js');
const courses = require('./coursesRoute.js');
const categories = require('./categoriesRoute.js');

module.exports = app =>{
    app.use(
        express.json(),
        persons,
        courses,
        categories
    );
};