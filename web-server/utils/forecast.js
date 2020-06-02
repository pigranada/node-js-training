const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11fbbb597f082f08cc1cca01d5d33abb&query=' + latitude + ','+longtitude
    console.log(url)
    request({ url, json: true }, (error, {body}) => {
        if(error){
            console.log(error)
            callback('Unable to connect to the weather service', undefined)
        }
        else if(body.error){
            console.log(body.error)
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out, but it feels like ${body.current.feelslike}`)
        }
    })
}

module.exports = {
    forecast: forecast
}