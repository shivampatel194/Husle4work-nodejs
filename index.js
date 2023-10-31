<<<<<<< Updated upstream
const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
const userDataRoutes = require("./routes/userDataRoutes");
app.use(express.json());

app.use("/users", userRouter);
app.use("/userData", userDataRoutes);

mongoose
  .connect(
    "mongodb+srv://patelshivam21194:Patel%408140297844@husle4work.onxfqqr.mongodb.net/"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server stared on 5000 port");
    });
  })
  .catch((error) => {
    console.log(error);
  });
=======

const express = require("express");
const userRouter = require("../routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
const userDataRoutes = require("../routes/userDataRoutes");
const jobRouter = require("../routes/jobRoutes")

app.use(express.json());

app.use("/users", userRouter);
app.use("/userData" , userDataRoutes);
app.use("/jobs", jobRouter);





mongoose.connect("mongodb+srv://patelshivam21194:Patel%408140297844@husle4work.onxfqqr.mongodb.net/").
then(()=>{
    app.listen(5000, ()=>{
        console.log("server stared on 5000 port");
    });
    
}).catch((error)=>{
    console.log(error);
})





>>>>>>> Stashed changes
