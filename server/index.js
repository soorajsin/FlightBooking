const express = require("express");
const app = express();
require("./DB/connection");
const router = require("./Routers/route");
const cors = require("cors");
const port = 4000;


app.get("/", (req, res) => {
          res.status(201).json({
                    message: "Server created ...."
          })
});


app.use(express.json());
app.use(cors());
app.use(router);



app.listen(port, () => {
          console.log(`server is running on ${port}`);
})