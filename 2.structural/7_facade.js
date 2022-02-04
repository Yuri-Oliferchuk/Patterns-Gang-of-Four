class Complaints {
    constructor() {
        this.complaints = []
    }

    replay() {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.replay(complaint)
    }
}

class ProductComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Product ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Service ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
           complaint = new ServiceComplaints() 
        } else {
           complaint = new ProductComplaints()
        }
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Юра', 'service', 'не доступен'))
console.log(registry.register('Лена', 'product', 'вылазит ошибка'))