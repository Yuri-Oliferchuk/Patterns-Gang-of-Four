class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsebilities(){}

    work() {
        return `${this.name} выполняет ${this.responsebilities()}`
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsebilities() {
        return 'процесс создания программ'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsebilities() {
        return 'процесс тестирования'
    }
}

const dev = new Developer('Yuriy', 10000)
const tester = new Tester('Lena', 90000)
console.log(dev.getPaid())
console.log(dev.work())
console.log(tester.getPaid())
console.log(tester.work())