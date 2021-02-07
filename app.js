const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const app = express()

app.disable('etag')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')
const linksRouter = require('./routes/links')
const wildcardRouter = require('./routes/wildcard')

app.get('/', indexRouter)
app.get('/link(s)?', linksRouter)
app.get('/link(s)?/:linkId', linksRouter)
app.get('*', wildcardRouter)

module.exports = app;
