const express = require("express"),
	routes = require("./controllers/burgers_controller.js"),
	exphbs = require("express-handlebars"),
	bdParser = require("body-parser"),
	path = require('path');
const app = express();


app.use(
  bdParser.urlencoded({extended: true})
);
app.use(bdParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT
app.listen(PORT, ()=> {
	console.log(`Server listening on: http://localhost:${PORT}`);
});
