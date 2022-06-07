"use strict"

console.log('Request data');

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

const prep = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000);
})

prep.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true,
                reject(data)
            // console.log('Data received', backendData)
        }, 2000)
    })
    // prep2.then(clientData => {
    //     console.log('Data recieved', clientData)
    // })
})
    .then(clientData => {
        clientData.modified = true
        return clientData
    }).then(data => {
        console.log('Modified', data)
    })
    .catch(err => console.log('Error:', err))
    .finally(() => { console.log('Finally') })