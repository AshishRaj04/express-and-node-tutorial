// seperator
const path =require('path');
console.log(path.sep);

// to show the path of any file and folder
const filePath = path.join('/content/','subfolder','text1.txt');
console.log(filePath);

//to show the base file or folder .  In this case it is text.txt
const base = path.basename(filePath)
console.log(base);


//showing the absolute path any file and folder
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);