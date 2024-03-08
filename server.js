const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb+srv://Zarina:Zarina14@cluster0.wsz6gvy.mongodb.net/?retryWrites=true&w=majority')


app.set('view engine', "ejs")

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false}))

app.get('/',(req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date,
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date,
        description: 'Test description 2'

    }]
    res.render('articles/index', { articles: articles })
})

app.listen(5000)