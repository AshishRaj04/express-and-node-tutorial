// File system . Synchronous . non-blocking
// in this synchronous method .  JS read this file line by line .


const {readFileSync,writeFileSync} = require ('fs');

const first = readFileSync('./content/subfolder/text1.txt','utf-8');
const second = readFileSync('./content/subfolder/text2.txt','utf-8');
console.log(first,second);

writeFileSync('./content/subfolder/sync.txt',
`Here is the result : ${first}, ${second}`,
{flag:'a'});

