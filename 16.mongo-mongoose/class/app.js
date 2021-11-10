const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Agent = require("./agent");
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
