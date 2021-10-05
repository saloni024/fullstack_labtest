function lowerCaseWords(arr){
    return new Promise(function(resolve){
        newArr = [];
        arr.forEach(x => {
            if(typeof(x) == 'string'){
                newArr.push(x.toLowerCase());
            }
        });
        resolve(newArr);
    })
}
const mixedArray = ['PIZZA',10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray));