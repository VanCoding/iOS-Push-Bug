var fs = require("fs");
var apn = require("apn");

var sender = new apn.Connection({pfx:fs.readFileSync("./certificate.pfx"),production:false});
var i = 0;

setInterval(function(){
    var msg = new apn.Notification();
    msg.expiry = Math.floor(new Date().getTime()/1000+241920);
    msg.payload = {i:i++};
    msg.alert = "";
    msg.sound = "default";
    msg.contentAvailable = true;
    sender.pushNotification(msg,new apn.Device(process.argv[2]));
},1000);
