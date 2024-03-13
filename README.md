# Report

Name of project is Markdown Blog.

Markdown Blog is a web application designed to facilitate the creation of articles with title, description, and Markdown formatting. This platform aims to provide users with a simple and intuitive interface for composing and publishing articles online. By leveraging the Markdown syntax, users can easily format their content without needing to learn complex HTML or CSS.

## About the App

Users can create new articles by providing a title, description, and content using Markdown syntax. This allows for flexible formatting options such as headings, lists, links, and more. Once an article is created, users have the ability to edit and update its content as needed. This enables authors to refine their articles over time or make corrections as necessary. Markdown Blog offers a preview function that allows users to preview their articles in real-time before publishing. This helps authors ensure that their content appears as intended with proper formatting. After creating and editing their articles, users can publish them to make them publicly available on the platform. Published articles can be viewed by other users and shared via a unique URL.

## How to Run the App Locally

Follow these steps to run the app on your local machine: Use npm (Node Package Manager) to install the dependencies listed in my project's package.json file:
npm install
This command will install all the dependencies listed in the package.json file, including dompurify, ejs, express, jsdom, marked, method-override, mongodb, mongoose, and slugify. Start the Application: After installing the dependencies, you can start my web application. Assuming I have an entry point file (server.js), use npm run devStart to run it because in package.json Icreated devStart to run.
Once your application is running, open your web browser and navigate to the appropriate URL [http://localhost:5000] to access my web application locally.

## Application Dependencies

The following dependencies are required to run the application:

- Node.js
- Express.js
- MongoDB (In my computer I can not download MongoDB but I used MongoDB Atlas, created account and created cluster to my project and I used url from this cluster)

## Links

- GitHub Repository [https://github.com/00015933ID/WT.CW2.ID00015933.git]. Change the main to master all commits pushed in master.
- Hosted Application[ ]

## Project Structure

I used server.js instead of app.js. It is containing service layer logic.
I did not use any images that is why I did not created public file. I used bootstrap to style my application.
I used routes file and inside articles.js because my web application is about creating article.
I used views\articles file contain 'templates of HTML'.
