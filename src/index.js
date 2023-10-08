
const express = require("express");
const userRouter = require("../routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

app.use("/users", userRouter);

app.get("/" , (req,res)=>{
    res.send("hello");
});

app.get("/quotes", (req,res)=>{
 res.send("dont give up on your dreams");
});



mongoose.connect("mongodb+srv://patelshivam21194:Patel%408140297844@husle4work.onxfqqr.mongodb.net/").
then(()=>{
    app.listen(5000, ()=>{
        console.log("server stared on 5000 port");
    });
    
}).catch((error)=>{
    console.log(error);
})





