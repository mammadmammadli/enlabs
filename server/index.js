const { componentFactoryName } = require('@angular/compiler');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4300;
const { Company, User, Office, Tag } = require('./db');
const { exception } = require('console');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/healthcheck', (req, res) => {
    res.send('ok')
})

app.get('/users', async (req, res) => {
    const users = await User.findAll({
        where: null,
        include: [
            { model: Tag },
            { model: Office },
            { model: Company }
        ]
    })
    res.send(users)
})

app.get('/load', async (req, res) => {
    const company = await Company.create({ name: 'Microsoft' })
    company.save()
    const office = await Office.create({ city: 'Tallin', companyId: company.id })
    office.save()

    res.send('Ok')
})

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        user.save()
        res.json(user)
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log('Server is running')
})
