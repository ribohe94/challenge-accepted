/**
 * Created by ribohe94 on 17/12/16.
 */
var port = 3000,
    express = require('express'),
    app = express();

app.use('/views', express.static(__dirname + '/express/views'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/js', express.static(__dirname + '/express/js'));

app.listen(port);
console.log('Now serving http://localhost:'+port+'/views/index.html');