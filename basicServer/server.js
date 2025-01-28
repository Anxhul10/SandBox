"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 8000;
app.get('/', function (req, res) {
    res.send("hello from server");
});
app.listen((port), function () {
    console.log("server is fire at http://localhost:".concat(port));
});
