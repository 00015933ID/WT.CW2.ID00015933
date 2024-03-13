// Importing required modules
const mongoose = require('mongoose')// Importing Mongoose for database operations
const marked = require('marked')//Importing Marked for converting Markdown to HTML
const slugify = require('slugify')// Importing Slugify for generating slugs
const createDomPurify = require('dompurify')// Importing DOMPurify for sanitizing HTML
const { JSDOM } = require('jsdom')// Importing JSDOM for creating a virtual DOM environment
const dompurify = createDomPurify(new JSDOM().windows)// Creating a DOMPurify instance
// Defining the article schema using Mongoose
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
})
// Middleware to run before validation
articleSchema.pre('validate', function(next) {
    // Generating slug from the title using Slugify
    if (this.title) {
        this.slug = slugify(this.title, { lower: true,
        strict: true })
    }
// Converting Markdown to sanitized HTML using Marked and DOMPurify
    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }

    next()// Calling next middleware
})
//Exporting by using module in order to use schema
module.exports = mongoose.model('Article', articleSchema)