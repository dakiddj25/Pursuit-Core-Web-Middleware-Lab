const express = require("express");
const cors = require("cors");

const port = 3000;

const app = express();
app.use(cors());

let animalArr = ["Lions","cats", "dogs", "Panda"]
let respA = {
    status: "success",
    message: true
  }

const isAnimal = (req,res, next) => {
   animalArr.forEach((el) => {
       if((req.params.type).toLowerCase() === el.toLowerCase()){
        res.json(respA)
        
       } 
   })
  next();
}
const middleWareB = (req,res, next) => {
    console.log("Middleware B has been fired");
    next();
}



// app.use(isAnimal);
// app.use("/people",middleWareB)

app.get("/", (req, res) => {
    res.json("Hello Wellcome to Jay World")
})

app.get("/animal", (req, res ) => {
    res.json(animalArr)
})

app.get("/animal/:type",isAnimal, (req, res) => {
    res.json("We do not have " + req.params.type + " in our list")
})

app.listen(port, () => {
    console.log("listening on port: ", port)
});



