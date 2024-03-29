const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    level: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
}, );


module.exports = mongoose.model('Course', courseSchema);