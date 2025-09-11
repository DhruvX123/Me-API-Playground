const Profile = require('../models/profile');

// GET /profile
// Pagination Implemented
// Search Functionality Implemented
exports.getAllProfile = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Build the search query
        const searchQuery = {};
        if (req.query.name) {
            searchQuery.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive search
        }
        if (req.query.email) {
            searchQuery.email = { $regex: req.query.email, $options: 'i' }; // Case-insensitive search
        }
        if (req.query.skills) {
            searchQuery.skills = { $elemMatch: { $regex: req.query.skills, $options: 'i' }}; // Case-insensitive search
        }

        const profile = await Profile.find(searchQuery).skip(skip).limit(limit);
        const totalProfile = await Profile.countDocuments(searchQuery);
        const totalPages = Math.ceil(totalProfile / limit);

        res.json({
            totalProfile,
            totalPages,
            currentPage: page,
            profile
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /profile/:id
exports.getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Profile not found' });
        res.json(profile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST /profile
exports.createProfile = async (req, res) => {
    try {
        const profile = await Profile.insertMany(req.body);
        res.status(201).json(profile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// PUT /profile/:id
exports.updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!profile) return res.status(404).json({ error: 'Profile not found' });
        res.json(profile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /profile/:id
exports.deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Profile not found' });
        res.json({ message: 'Profile deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
