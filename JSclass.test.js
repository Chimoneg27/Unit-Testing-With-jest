const Calculator = require('./JSclass');

const adder = new Calculator(455, 5);
let added = adder.add;
let remove = adder.minus;
let divide = adder.div;
let multiply = adder.mult;

describe('my Calculation', () => {
    test('is addition', () => {
        expect(added).toBe(460);
    })

    test('is subtraction', () => {
        expect(remove).toBe(450);
    })

    test('is division', () => {
        expect(divide).toBe(91);
    })

    test('is multiplication', () => {
        expect(multiply).toBe(2275);
    })
})