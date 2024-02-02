// Importing necessary file, module and package , and creating instances of them
import app from "./index.js";

const port = 8000;

// Listening to server and starting the server
app.listen(port, () => {
  console.log(`Server is listening to port :: ${port}`);
});
