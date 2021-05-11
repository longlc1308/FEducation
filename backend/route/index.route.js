const sitesRouter = require('./../route/routes/sites.route')


function route(app) {
    app.use('/api/site', sitesRouter);
}

module.exports = route;