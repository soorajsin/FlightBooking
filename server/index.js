const express = require("express");
const app = express();
const port = 4000;


app.get("/", (req, res) => {
          res.status(201).json({
                    message: "Server created ...."
          })
});



app.listen(port, ()=>{
          console.log(`server is running on ${port}`);
})