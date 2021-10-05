function resolvedPromise(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    })
}
function rejectedPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            reject({'error':'delayed exception!'});
        }, 500);
    });
}

resolvedPromise().then((x)=>console.log(x));
rejectedPromise().catch((x)=>console.error(x));