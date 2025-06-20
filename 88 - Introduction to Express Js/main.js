// Express.js is a web framework for Node.js
// It is used to build web applications and APIs

const express = require('express')
const app = express()
const port = 3000

//vishal.txt will serve as an static file
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

// slug is parameter and also a variable
// app.get('/blog/:slug/:second', (req, res) => {
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' } query creates an object from the query string
      // req.params is an object that contains the route parameters like slug
    // query string is the part of the URL that comes after the ? mark
    // parameters are the part of the URL that comes after the : mark

    res.send(`hello ${req.params.slug}`)
    // res.send(`hello ${req.params.slug} and ${req.params.second}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})