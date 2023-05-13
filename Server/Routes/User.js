const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Collections/USER')
const express = require('express')
const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password ,image} = req.body;
        if (!(email && password && first_name && last_name)) { return res.send('No Completely') }
        const olduser = await User.findOne({ email })
        if (olduser) { return res.send('User Trite') }
        encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({ first_name, last_name, email: email.toLowerCase(), password: encryptedPassword,image })
        res.send('Register succeed'), console.log('Register succeed')
    }
    catch (error) { console.log(error) }
})
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) { return res.status(300).send('No Completely') }
        const user = await User.findOne({ email })
        if (user) {
            const pass = await bcrypt.compare(password, user.password)
            if (pass === true) {
                const token = jwt.sign({ user_id: user._id, email, user_name: user.first_name, user_lastname: user.last_name ,image:user.image}, process.key = '789456454');
                res.send({ jwt: token }), console.log({ jwt: token })
            }
            else { res.send('wrong password') }
        }
        else { res.send('not found user') }
    }
    catch (error) { console.log(error), res.send(error) }
})
router.post('/Auth', (req, res) => {
    try {
        const token = req.headers['id_token']
        const decoded = jwt.verify(token, process.key = '789456454')
        res.json(decoded ), console.log(decoded )
    }
    catch (error) { console.log(error) }
})
router.get('/list&user', async (req, res) => {
    try {
        const user = await User.find({}).select("-password").exec();
        res.send(user)
    }
    catch (error) { console.log(error) }
})
router.get('/list&user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }).select("-password").exec();
        res.send(user);
    }
    catch (error) { console.log(error) }
})
router.delete('/delete&user:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOneAndDelete({ _id: id });
        res.send(user);
    }
    catch (error) { console.log(error) }
})
router.put('/update&user:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { first_name, last_name } = req.body;
        if (!(first_name && last_name)) { return res.send('No Completely') }
        const user = await User.findOneAndUpdate(
            { _id: id },
            { first_name, last_name });
        res.send(user);
    }
    catch (error) { console.log(error) }
})
router.put('/update&email:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { email } = req.body
        if (!email) { return res.send('No Completely') }
        const user = await User.findOneAndUpdate(
            { _id: id },
            { email });
        res.send(user);
    }
    catch (error) { console.log(error) }
})
router.put('/update&password:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { password } = req.body
        if (!password) { return res.send('No Completely') }
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.findOneAndUpdate(
            { _id: id },
            { password: encryptedPassword });
        res.send(user);
    }
    catch (error) { console.log(error) }
})
router.put('/update&image/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { image } = req.body
        if (!image) { return res.send('No Completely') }
        const user = await User.findOneAndUpdate(
            { _id: id },
            { image: image });
        res.send(user);
    }
    catch (error) { console.log(error) }
})

module.exports = router