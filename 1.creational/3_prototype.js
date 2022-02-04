//Создаем обьект прототип
const car = {
    wheels: 4,

    init() {
        console.log(`У меня есть ${this.wheels} колеса. Мой влыделец ${this.owner}`)
    }
}
// Используем прототип для нового обьекта
const carWithOwner = Object.create(car, {
    owner: {
        value: 'Yuriy'
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()