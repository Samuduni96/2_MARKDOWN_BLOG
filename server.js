const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{                 // making an array to store articles
        title: 'Test Article_1',
        createdAt: new Date(),
        description: 'Test description_1'
    },
    {
        title: 'Test Article_2',
        createdAt: new Date(),
        description: 'Test description_2'
    },
    {
        title: 'Test Article_3',
        createdAt: new Date(),
        description: 'Test description_3'
    }]
    res.render('articles/index', {articles: articles})
})

app.listen(5000)
