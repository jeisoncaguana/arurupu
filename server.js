const express = require("express");
const path = require("path");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout"); // usa views/layout.ejs

app.get("/", (_req, res) => {
  res.render("index", { title: "Puu" });
});

app.listen(PORT, () => console.log(`✅ http://localhost:${PORT}`));
 