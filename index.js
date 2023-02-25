const http = require("http")
const fs = require("fs")
const displayName = process.argv[2]
fs.writeFileSync("index.html","<h1> Hello World </h1><p> This is "+ displayName +"... </p>")

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.write(fs.readFileSync("index.html"))
    res.end();

});

server.listen(5000,()=>{
    console.log("server is up at port 5000")
});