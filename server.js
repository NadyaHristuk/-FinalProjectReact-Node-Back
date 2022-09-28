const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;
const port = process.env.PORT || 8000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => {
      console.log("Database connect successfully");
      console.log(`Server running. Use our API on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

  