const coursesRouter = require('./routes/courses.route')


function route(app) {
    app.use('/api/courses', coursesRouter);
}

module.exports = route;