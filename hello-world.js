const http = require('http');
const fs=require('fs')
// console.log("HELLO WORLD")
// http.createServer((req,res)=>{
//   res.end('<h1>Hello Node!!!!</h1>\n');
// }).listen(3000);
fs.writeFile('welcome.txt','hello node',(err)=>{
  if (err) throw err;
  console.log("file created")

});
fs.readFile('welcome.txt',(err,data)=>{
  if (err) throw err;
  else console.log(data.toString())
})

