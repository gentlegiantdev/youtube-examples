


const Arr = [1, 2, 3, 4, 5]
Arr.forEach(x => x * x).reduce((total, value) => total + value)
// Uncaught TypeError: Cannot read property 'reduce' of undefined