const greeter = (name = 'Pogi', age) => {
    console.log('Hello ' + name)
    console.log('You are ' + age + ' years old')
}

greeter('Ivann')
greeter(undefined, 25)