class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(mesage, to) {
        this.room.send(mesage, this, to)
    }

    recive(mesage, from) {
        console.log(`${from.name} => ${this.name}: ${mesage}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(mesage, from, to) {
        if(to) {
            to.recive(mesage, from)
        } else {
            Object.keys(this.users).forEach( key => {
                if (this.users[key] !== from) {
                    this.users[key].recive(mesage, from)
                }
            })
        }
    }
}

const u1 = new User('Yuriy')
const u2 = new User('Lena')
const u3 = new User('Alisa')

const room = new ChatRoom()

room.register(u1)
room.register(u2)
room.register(u3)

u1.send('Hello!!!', u2)
u2.send('Hello too!!!', u1)
u3.send('Hello All',)