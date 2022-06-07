"use strict"

//console.log('Request data');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true,
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)




// const prep = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// prep.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true,
//                 reject(data)
//             // console.log('Data received', backendData)
//         }, 2000)
//     })
//     // prep2.then(clientData => {
//     //     console.log('Data recieved', clientData)
//     // })
// })
//     .then(clientData => {
//         clientData.modified = true
//         return clientData
//     }).then(data => {
//         console.log('Modified', data)
//     })
//     .catch(err => console.log('Error:', err))
//     .finally(() => { console.log('Finally') })


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// // sleep(2000).then(() => console.log('After 2 sec'));
// // sleep(3000).then(() => console.log('After 3 sec'));

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('All promises')
//     })

// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('Race promises')
//     })











// const person = Object.create({
//     calculateAge() {
//         console.log('Age: ', new Date().getFullYear() - this.birthYear)
//     }
// }, {
//     name: {
//         value: 'Nikita',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     birthYear: {
//         value: 2000,
//         enumerable: false
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = 'red'
//             console.log('Set age', value)
//         }
//     }
// })

// // const person = {
// //     name: 'Nik',
// //     age: 22
// // }
// // person.name = 'Ivan'

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('Key:', key, person[key])
//     }
// }














// const animal = {
//     name: 'Jhon',
//     age: 3,
//     hasTail: true
// }

// class Animal {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am Animal')
//     }
// }

// // const animal = new Animal({
// //     name: 'Jhon',
// //     age: 3,
// //     hasTail: true
// // })

// class Dog extends Animal {
//     static type = 'DOG'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log('I am dog')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const dog = new Dog({
//     name: 'Graph',
//     age: 5,
//     hasTail: true,
//     color: 'White'
// })


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'

        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 200,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle1',
    size: 300,
    color: 'green'
})