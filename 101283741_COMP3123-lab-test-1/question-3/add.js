const fs = require('fs');

const dir = './Logs';

fs.mkdir(dir, (err) => {
    if (err) {
        throw err;
    }
});

let i = 0;
while(i < 10){
    var content = "log " + i;
    fs.appendFile('./Logs/log' + i + '.txt', content, err => {
        if(err){
            console.error(err)
            return;
        }
    })
    i++;
}

let logfiles = fs.readdirSync(dir);
  
logfiles.forEach((file) => {
    console.log(file);
});

    
