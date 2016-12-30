/*
Set up Searialport
 */
var serialport = require('serialport');
var portName = '/dev/ttyACM0';
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});

var data = 0;
sp.on('data', function (input) {
    data = input;
});

/*
Set up listener
 */
var express = require('express');
var app = express();

app.get('/data', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data); //replace with your data here
});

app.listen(3001);