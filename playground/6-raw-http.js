// Raw HTTP request instead of using request library

const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=11fbbb597f082f08cc1cca01d5d33abb&query=21,121'

const request = http.request(url, (response) =>{    

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()