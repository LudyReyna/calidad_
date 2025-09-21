const express = require("express");
const path = require("path");
const tutorRoutes = require("./src/routes/tutorRoutes");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static("public"));
app.use("/", tutorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
