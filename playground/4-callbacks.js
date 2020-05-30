// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
    
//     setTimeout(() => {
        
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Manila', (data) => {
//     console.log(data)
// })

const add = (x, y, callback) => {
    setTimeout(()=>{
        let sum = x + y
        callback(sum)
    }, 2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})