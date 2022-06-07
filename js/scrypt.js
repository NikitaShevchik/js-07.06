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


const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Nikita',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2000,
        enumerable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})

// const person = {
//     name: 'Nik',
//     age: 22
// }
// person.name = 'Ivan'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key:', key, person[key])
    }
}