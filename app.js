const express=require('express');
const app=express();

const addUser=(req, res, next) => {
    req.user="Guest";
    next();
};
app.use(addUser);
app.get('/welcome', (req,res)=>{
    res.send(`<h1>Welcome ,${req.user}!</h1>`);
});

app.listen(3000,()=>{
    console.log("Server is running");

})