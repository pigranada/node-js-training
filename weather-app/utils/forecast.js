const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11fbbb597f082f08cc1cca01d5d33abb&query=' + latitude + ','+longtitude

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to the weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weather_description: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = {
    forecast: forecast
}