const express= require('express');
const mongoose= require('mongoose');
//const dotenv= require('dotenv');
const app = express();


const DB='mongodb+srv://srishti:srishtishrivastava@cluster0.azedc.mongodb.net/mernstack?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection succesful");
}).catch((err) => console.log(" not connection"));

//Middleware

const middleware = (req, res, next) => {
       console.log('Hello from the middleware');
       next();
}

app.get('/', (req, res) => {
       res.send(`Hello world from the server`);
});

app.get('/about',middleware, (req, res) => {
    res.send(`Hello world from the about`);
    console.log("Hello from about");
});

app.get('/contact', (req, res) => {
    res.send(`Hello world from the contact`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello  registration world from the server`);
});

app.listen(3000,()=>{
    console.log(`server is running at port no 3000`);
})