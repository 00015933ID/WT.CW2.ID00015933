//Setting up variables
const express = require('express')
const Article = require('../models/article')
const router = express.Router()
// Route for creating a new article
router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})
// Route for editing an existing article
router.get('/edit/:id', async (req, res) => {
    // Finding the article by its ID
    const article = await Article.findById(req.params.id)
    // Rendering the edit article form template with the found article
    res.render('articles/edit', { article: article })
})
// Route for displaying a single article
router.get('/:slug', async (req, res) =>{
    // Finding the article by its slug
    const article = await Article.findOne({ slug: req.params.slug})
    // If article not found, redirect to home page
    if(article == null) res.redirect('/')
    // Render the article show page with the found article
    res.render('articles/show', { article: article})
})
// Route for saving a new article
router.post('/', async (req, res, next) =>{
    req.article = new Article()// Create a new article instance
    next()// Call the next middleware
}), saveArticleAndRedirect('new')
// Route for updating an existing article
router.put('/:id', async (req, res, next) =>{
    // Find the article by ID
    req.article = await Article.findById(req.params.id)
    next()// Call the next middleware
}), saveArticleAndRedirect('edit')// Call the saveArticleAndRedirect function with 'edit' path


// Route for deleting an article
router.delete('/:id', async (req, res) =>{
    // Find and delete the article by ID
    await Article.findByIdAndDelete(req.params.id)
     // Redirect to the homepage after deletion
    res.redirect('/')

})
// Middleware function to save the article and redirect
function saveArticleAndRedirect(path) {
    return async (req, res) => {
        let article = req.article
        // Set article properties from request body
            article.title = req.body.title
            article.description = req.body.description
            article.markdown = req.body.markdown
        try {
            // Save the article
            article = await article.save()
            // Redirect to the article page
            res.redirect('/article/${article.slug}')
        }catch (e) {
            // Render the appropriate form with the article data in case of error
            res.render('articles/${path}', {article: article})
    
        }

    }
}
//To export router
module.exports = router