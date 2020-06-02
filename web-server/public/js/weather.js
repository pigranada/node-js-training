fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// Fetching weather


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address='+encodeURI(location)).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log('ERROR!', data.error)
        }
        else{
            console.log('Forecast:',data.forecast)
            console.log('Location:',data.location)
        }
    })
})
})