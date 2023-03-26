const promise = new Promise ((resolve, reject) =>{
    if(true){
        resolve('This is working!');
    } else {
        reject('Error, this is a problem.');
    }
})

promise.then(result => console.log(result));