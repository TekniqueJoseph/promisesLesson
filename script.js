const promise = new Promise ((resolve, reject) =>{
    if(true){
        resolve('This is working');
    } else {
        reject('Error, this is a problem.');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'I made it')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'So glad to see you')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Let us begin!')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})

promise
.then(result => result + ' Hurrayyy')
.then(result2 => result2 + '?')
.catch(() => console.log('errror!'))
.then(result3 => {
    console.log(result3 + '!');
})