const router = require('express').Router();
const db = require('../data/helpers/user-model.js');
const restricted = require('./restricted.js');

router.get('/', restricted, async (req, res) => {
    try {
        const users = await db.find(req.headers.department);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: `Users could not be found ${error}.`});
    }
});

module.exports = router;