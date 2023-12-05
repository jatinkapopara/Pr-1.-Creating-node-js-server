
// index

// home
// about
// product
// contact



const http = require('http');

const post = 8888;

const fs = require('fs');

const hendel = (req, res) => {
   let url = req.url;
   let filename = "";
   switch(url){
    case  '/home':
            fileName = './home.html'
        break;
        case  '/about':
            fileName = './about.html'
        break;
        case  '/product':
            fileName = './product.html'
        break;
        case  '/contact':
            fileName = './contact.html'
        break;
        case  '/':
            fileName = './index.html'
        break;
        default:
            fileName = './404.html'
            break;
    }
    fs.readFile(fileName,(err,page) =>{
        if(err){
            console.log("Not Found");
            return false;
        }
        res.end(page)
    })
}

const server =http.createServer(hendel);
server.listen(post,(err) => {
    if (err) {
        console.log("server not started");
        return false;
    }
    else{
        console.log(`server started`);
    }
})