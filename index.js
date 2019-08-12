// Without "./", Node looks in its global module folder
const nerds = require('nerds');
const http = require('http');
function handleReqAndRes(req, res) {
    console.log(req.url);
    // const timestamp = new Date();
    // console.log("I totally recieved a request!")
    
    
    let singleHP = nerds.resolve('Harry Potter').asArray()[0].first;
    console.log(singleHP);


    //.end() sends the response.. "Tapes up the box and ships it.""
    // res.end(`<h1>Hello World ${timestamp}</h1>
    // <p>lol wtf</p>`);
    res.end(singleHP);
};

// What's a server??
// A piece of code or a computer running a piece of code that does something useful for YOU.
// Usually servers store data and often manipulate that data.

const server = http.createServer(handleReqAndRes);
// http.createServer() accepts a function and returns a "server".
// When the server receives a Request:
// 1. It puts together *most* of a Response.
// 2. It calls *your* function and passes it the Request and Response.



// What is 3000?
server.listen(3000);