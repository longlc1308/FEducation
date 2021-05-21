const Course = require("./../models/course.model");

class CoursesController {
    async index(req, res, next) {
        const courses = await Course.find();
        return res.status(201).json(courses);
    }

    async show(req, res, next) {
        const course = await Course.findOne({ slug: req.params.slug });
        return res.status(201).json(course);
    }

    async edit(req, res, next) {
        const course = await Course.findById(req.params.id);
        return res.status(201).json(course);
    }

}

module.exports = new CoursesController();