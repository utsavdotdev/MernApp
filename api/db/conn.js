const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://utsavbhattarai:utsav+123@cluster0.rjrax.mongodb.net/mernapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
    console.log("err");
  });
