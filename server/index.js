const { componentFactoryName } = require('@angular/compiler');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4300;
const { Company, User } = require('./db');
const { exception } = require('console');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/healthcheck', (req, res) => {
    res.send('ok')
})

app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        user.save()
        res.json(user)
    } catch (e) {
        throw new exception(e)
    }
})

app.listen(port, () => {
    console.log('Server is running')
})
