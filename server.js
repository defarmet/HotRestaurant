var path = require("path");
var express = require("express");

var app = express();
var PORT = 3005;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var currentList = [];
var waitingList = [];

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function(req, res) {
	res.json(currentList);
});

app.get("/api/waitlist", function(req, res) {
	res.json(waitingList);
});

app.post("/reservations", function(req, res) {
	if (currentList.length < 5) {
        	currentList.push(req.body);
	} else {
        	waitingList.push(req.body);
	}
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
