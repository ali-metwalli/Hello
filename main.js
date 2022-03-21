let greetings = ['hello', 'hi', 'hola', 'salam', 'ahlan'];
let randomGreeting = greetings[getRandomInt(4)];
console.log(`You can greet someone by saying ${randomGreeting}`);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}