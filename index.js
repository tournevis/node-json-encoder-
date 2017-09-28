var fs = require('fs')
var path = require('path')

var dir = __dirname + '/jsonToEncode/'
fs.readdirSync(dir).forEach(function (file) {
    var data = require(dir + file)
    var filename = file.replace(/\.json$/, '')
    let objJsonStr = JSON.stringify(data);
    let objJsonB64 = new Buffer(objJsonStr).toString("base64")

    fs.writeFile("./jsonEncoded/" + filename + ".txt", objJsonB64, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(filename  + " :  Was Saved");
    });
});
