function asyncAuth(error, data) {
        try {
            return data
        } catch (error) {
            return error
        }
}

/**
 * import asyncAuth from '*'
 * Функция `asyncAuth(callback)` получает callback где
 * ошибка может быть передана 1 аргументом или
 * необходимые данные, вторым аргументом.
 *
 * Вам нужно реализовать функцию `auth()`,
 * которая вызывает `asyncAuth()`, но возвращает Promise.
 *
 * @returns {Promise}
 */
//function auth() {
//         asyncAuth(error, data) {
//
//         }
// }

function auth(error, data) {
        return new Promise((resolve,reject) => {
            asyncAuth(error, data)
            if (data) {
                resolve(data)
            } else {
                reject(error)
            }
        })
}

auth('error')
    .then((data) =>  console.log(data), (error) => console.log(error))
auth('', 'data')
    .then((data) =>  console.log(data), (error) => console.log(error))



const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if(randomNumber < .7) {
        resolve('Все прошло отлично!');
    } else {
        reject(new Error('Что-то пошло не так'));
    }
});
promise.then((data) => {
        console.log(data);  // вывести 'Все прошло отлично!'
    },
    (error) => {
        console.log(error); // вывести ошибку
    }
);

