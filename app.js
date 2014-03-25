var express = require("express");
var app = express();

var webRTC = require("webrtc.io").listen(8001);

app.use(express.static("public"));

app.get('/webrtc.io.js', function(req, res) {
  res.sendfile("node_modules/webrtc.io-client/lib/webrtc.io.js");
});

app.listen(8000);
