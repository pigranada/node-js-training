const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Ivann'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ivann'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Ivann'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'Address must be provided'
        })
    }

    geocode.geocode(req.query.address, (error, {latitude, longtitude, location} = {}) => {
        if(error){
            return res.send({
                error: error
            })
        }

        forecast.forecast(latitude, longtitude, (error, forecastData) => {
            if(error){
                return res.send({
                    error: error
                })
            }
                
            console.log('hello')

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    
    if(!req.query.search){
        return res.send({
            error: 'Search terms should be provided'
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('help_article', {
        title: 'Help Page',
        name: 'Ivann'
    })
})

app.get('*', (req, res) => {
    res.render('not_found', {
        title: 'Error 404',
        name: 'Ivann'
    })
})

app.listen(port, () => {
    console.log('Starting the server at port ' + port)
})