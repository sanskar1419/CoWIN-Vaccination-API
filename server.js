// Importing necessary file, module and package , and creating instances of them
import app from "./index.js";
import { connectUsingMongoose } from "./config/mongoose.config.js";

const port = 8000;

// Listening to server and starting the server
app.listen(port, () => {
  console.log(`Server is listening to port :: ${port}`);
  // Connecting to MongoDB using Mongoose
  connectUsingMongoose();
});
