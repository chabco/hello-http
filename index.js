// Without "./", Node looks in its global module folder
const nerds = require('nerds');
const http = require('http');
function handleReqAndRes(req, res) {
    console.log(req.url);
    // const timestamp = new Date();
    // console.log("I totally recieved a request!")
    
    
    let singleHP1 = nerds.resolve('Harry Potter').asArray()[0].first;
    console.log(singleHP1);
    let singleHP2 = nerds.resolve('Harry Potter').asArray()[0].last;
    console.log(singleHP2);
    
    let genSW1 = nerds.resolve('Star Wars').asArray()[0].name;
    console.log(genSW1);

    let genSW2 = nerds.resolve('Star Wars').asArray()[0].name;
    console.log(genSW2);


    //.end() sends the response.. "Tapes up the box and ships it.""
    // res.end(`<h1>Hello World ${timestamp}</h1>
    // <p>lol wtf</p>`);
    res.end(`<h1><font color="lightpink">${singleHP1} ${singleHP2}</font> fell into the wrong universe and found themselves in middle the city where <font color="lightpink">${genSW1}</font> and <font color="lightpink">${genSW2}</font> reside! To <font color="lightpink">${genSW2}'s</font> surprise, <font color="lightpink">${genSW1}</font> ran away in fear due to feeling a different power coming from <font color="lightpink">${singleHP1} ${singleHP2}</font>. "HELP!" <font color="lightpink">${genSW2}</font> cried. Confused, <font color="lightpink">${singleHP1} ${singleHP2}</font> became enraged and started to fly far into the sky...</h1>`);
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