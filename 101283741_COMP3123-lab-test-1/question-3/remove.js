const fs = require('fs');

const dir = './Logs';
let logfiles = fs.readdirSync(dir);
logfiles.forEach((file) => {
    console.log('delete files...' + file)
    fs.unlink(dir + '\\' + file, function (err) {
        if (err) throw err;
    });
});

fs.rmdir(dir,{recursive: true}, err =>{
    if(err) throw err;
});
    
