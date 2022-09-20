var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest);
