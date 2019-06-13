const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../data/helpers/user-model.js');
const secret = process.env.SECRET

router.post('/register', async (req, res) => {
    let { username, password, department } = req.body;
    if (!username || !password || !department) {
        res.status(401).json({ message: "Please enter valid credentials" });
    } else {
        password = bcrypt.hashSync(password, 8);
        try {
            const newUser = await db.create({ username, password, department });
            if (newUser) {
                res.status(201).json(newUser);
            }
        } catch(error) {
            res.status(500).json({ message: `Your user could not be created ${error}` });
        }
    }
});

router.post('/login', async (req, res) => {
    const{ username, password } = req.body;
    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid credentials." });
    } else {
        try {
            const user = await db.findByUser(username);
            if (user && bcrypt.compareSync(password, user.password)) {
                // Using tokens, we need to manually generate and send token as part of response 
               // We'll write the function below 
                const token = generateToken(user.id, user.department);
                res.status(200).json({ message: `Welcome ${username}!`, token });
                // After token generated, we have to add to response
            } else {
                res.status(401).json({ message: "You shall not pass!" });
            }
        } catch (error) {
            res.status(500).json({ message: `Login failed ${error}` });
        }
    }
});
// Writing the function that generates our token 
function generateToken(id, department) {
    // Defining payload, containing claims (info) for token 
    const payload = {
        id,
        department
    };
    const options = {
        expiresIn: "1d"
    };
    // Grabs the secret from .env to verify token 
    return jwt.sign(payload, secret, options)
}

module.exports = router;