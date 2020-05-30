// Object shorthand

const name = 'Ivann'
const userAge = 25

const user = {
    name,
    age: userAge,
    location: 'Manila'
}

//Object Destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
}

// const label = product.label
// const price = product.price

//Product destructuring with default value and renaming
const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

//Destructuring product properties in functions
const transaction = (type, {label, price}) => {
    console.log(label)
    console.log(price)
}

transaction('order', product)