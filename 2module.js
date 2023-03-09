// operating system node module


 //info abt. current user
const os = require ('os');
const user = os.userInfo();
console.log(user);


//method return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);



//method to return the system info
const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);