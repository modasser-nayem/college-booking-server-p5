require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");

mongoose
   .connect(process.env.MONGO_URL)
   .then((data) => {
      console.log(`MONGODB IS CONNECTED ON ${data.connection.host}`);
   })
   .catch((err) => {
      console.log(`====================== MongoDB Error =======================
    ${err}            
    `);
   });
