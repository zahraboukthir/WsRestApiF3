const mongoose = require("mongoose");

const connectDB=async()=> {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
    try {
      await mongoose.connect(process.env.MONGO_URL,opts);
    console.log("The Database is CONNECTED .....");
   
  } catch (error) {
      console.log(error);
  }
  }

module.exports = connectDB;
