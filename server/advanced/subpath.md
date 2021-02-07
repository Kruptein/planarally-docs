# Subpath hosting

PlanarAlly can be hosted without effort at a root level (e.g. https://www.planarally.io) or at a subdomain (e.g. https://dnd.planarally.io).
When hosting at a subpath however some additional work needs to be done (e.g. https://www.planarally.io/dnd/).

You need to signal to the server that it's running on a subpath. Additionally you might also need to do some changes to your proxy.

## Server changes

When running the PA server, you need to make sure that you set a special environment variable before executing the server.

```bash
export PA_BASEPATH="/planarally"
```

The above will allow you to run PA on the subpath "/planarally".

When using the docker image, this env variable needs to be passed to the container.
Add the following part to your docker command.

```bash
--env PA_BASEPATH=/planarally
```

### Client and dev mode

When building the client it is generally recommended to make sure that the env variable is NOT set during the build.

When running in development mode however, you need to set it for the client as well.

## Proxy

### Nginx

When using nginx, you will have a very similar setup as the one described in [proxy](/server/advanced/proxy/), but all `location` parts will start with `/planarally` if that is your desired subpath.

Additionally you need to make one small modification to the socket.io specific location rule:

The proxy_pass (or host:port pass) needs to be changed to include the subpath. (e.g. `proxy_pass http://subaiohttp/subpath/socket.io/;`)

### Apache

Make sure to setup the proxypass and reverse on the subpath!

```apache2
ProxyPass /planarally http://127.0.0.1:8000/planarally
ProxyPassReverse /planarally http://127.0.0.1:8000/planarally
```
