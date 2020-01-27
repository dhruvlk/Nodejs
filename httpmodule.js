const http = require("http");
const server = http.createServer(function (req,res) {
res.writeHead(200,{"contect-type":"text/html"});
    res.write("<h4>Dhruv</h4>");
    res.write("<h4>Lallukarshanwala</h4>");
    res.end();
}).listen(3000,()=>console.log("Server Running On Port 3000"));