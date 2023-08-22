class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2
    }

    get add() {
        return this.num1 + this.num2;
    }

    get minus() {
        return this.num1 - this.num2;
    }

    get div() {
        return this.num1 / this.num2;
    }

    get mult() {
        return this.num1 * this.num2;
    }
}

module.exports = Calculator;