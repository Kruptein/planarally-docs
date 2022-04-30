---
layout: ../../../layouts/docs.astro
---

# Reverse proxy setup

Commonly when hosting a server, you use some reverse proxy to shield your actual server from the outside world.
Common solutions are nginx and apache.

Most aspects of hosting PA are pretty similar to other servers, the one exception is that PA uses a websocket for its communication and this can sometimes require some additional configuration.

## Nginx

When using nginx you need to explicitly setup websocket forwarding.

Following is an example config that mimicks my own config.
In this setup I use a socket to pass the traffic to my server, but an ordinary host:port combo can also be used.
The important part is that the sockets are passed through.
I'm no nginx expert so it's definitely possible that this can be simplified, but this should at least work.

```nginx
server {
    listen *:443;
    ssl on;
    ssl_certificate /etc/letsencrypt/live/darragh.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/darragh.dev/privkey.pem; # managed by Certbot

    server_name %FILL_IN%;

    location /subpath {
      proxy_set_header Host $http_host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_redirect off;
      proxy_buffering off;
      proxy_pass http://aiohttp;
    }

    location /socket.io/ {
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "Upgrade";
      proxy_set_header Host $host;
      proxy_pass http://aiohttp/socket.io/;
    }

    location /static {
      alias /home/darragh/dev/planarally/server/;
    }

    location ~ /.well-known {
      allow all;
      root /var/www/letsencrypt;
    }
}
```
