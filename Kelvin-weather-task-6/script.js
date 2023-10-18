const kelvin = 293; // The forecast today is 293 Kelvin.
let celsius = kelvin - 273; // Celsius is 273 degrees less than Kelvin.
let fahrenheit = celsius * (9 / 5) + 32; // Fahrenheit = Celsius * (9/5) + 32.
fahrenheit = Math.floor(fahrenheit); // Round down the Fahrenheit temperature.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// The temperature is 68 degrees Fahrenheit.
