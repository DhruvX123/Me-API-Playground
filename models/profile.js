const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    education: { type: String, required: true },
    skills: [{ type: String }],
    projects: [
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            links: [{ type: String }]
        }
    ],
    work: [{ type: String }],
    links: {
        github: { type: String },
        linkedin: { type: String },
        portfolio: { type: String }
    }
});

module.exports = mongoose.model('Profile', profileSchema);
