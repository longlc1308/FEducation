const Course = require('./../models/course.model');


class SitesController {

    index(req, res, next) {
        console.log(req.body);
        return res.status(201).json({ msg: "thanh cong" })
    }

}

module.exports = new SitesController();