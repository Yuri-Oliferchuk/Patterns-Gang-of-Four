class SimpleMembership {
    constructor (name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor (name) {
        this.name = name
        this.cost = 150
    }
}

class PremiuimMembership {
    constructor (name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standart: StandardMembership,
        premium: PremiuimMembership
    }

    create (name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()
const member = [
    factory.create('Yuriy', 'simple'),
    factory.create('Elena', 'standart'),
    factory.create('Alisa', 'premium'),
    factory.create('Ivan'),
]

// console.log(member);
member.forEach(a => a.define())