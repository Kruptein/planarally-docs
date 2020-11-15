# Self-hosting

Hosting PlanarAlly yourself requires a bit more setup then simply using an existing service, but it does give you more control and you can rely on it working offline as well.

To host PlanarAlly yourself you have three options:

-   Perform a manual installation
-   Use a precompiled executable / a pre-built client
-   Use a docker container under Linux

If you simply want to run the latest stable release, you are probably best served with the executables or the releases with pre-built clients which do not require much work.
In case you do want to have more control over the installation, want to use 'bleeding-edge' dev-builds and/or don't trust some random exe, you should consider performing a manual installation or using docker.

## Precompiled executable / pre-built client

You can find the latest version [on github](https://github.com/Kruptein/PlanarAlly/releases/).
Note that the version numbers that are part of the releases' file names, are omitted in this tutorial.

To run PlanarAlly on Windows, download the `planarally-windows.zip` and extract it somewhere in a new folder.
This folder contains a lot of different files, but the important one for you right now is the one titled `PlanarAllyServer.exe`.
When you execute this file, a command prompt will appear (a black screen with some text).

To run PlanarAlly on Linux or Mac, download the `planarally-bin` archives, while choosing your preferred compression method out of `.tar.gz` and `.zip` (content is the same).
Since only the client is pre-built, you need to take care of the python-dependencies yourself (see below with the manual installation).
Extract the content into a new folder, open a terminal navigating into that folder and execute `python3 server/planarserver.py` to start the server.

If everything went well you should now be able to visit `http://localhost:8000` and be greeted with the login screen.

For more info on how to configure some other aspects of your server visit the main [server management](/docs/server/management/) docs.

## Manual installation

### Production Mode

If you want to manually install PlanarAlly, you'll need to make sure you have python 3.6 or newer installed, you can get this from the [python site](https://www.python.org/downloads/).

To get the source files you can either download a zip for a particular version from [github](https://github.com/Kruptein/PlanarAlly/releases/) or
clone the repository with git.

Everything needed to run PlanarAlly can be found in the `server` folder.

Make sure to install all dependencies by running:
```bash
pip install --user -r requirements.txt`
```
(If you are familiar with python, it is strongly advised to create a dedicated venv for PA, but this is not a hard requirement.)

Before the server can be started, you have to build the client.
This is done by the Node.js package manager *npm* with the following command:  
```bash
npm i
npm run build
```

To run the server you now simply run `python3 planarserver.py` and your server should start up.

If everything went well you should now be able to visit `http://localhost:8000` and be greeted with the login screen.

For more information on how to configure your server visit the main [server management](/docs/server/management/) docs.

### Debug/Development Mode

In case you want to install and run the server in debug/development mode, you need to run, in the `client` folder:  
```bash
npm i
npm run serve
```

Then, in the `server` folder, run:
```bash
python3 planarserver.py dev
```

This starts the server in a 'hot module reloading' mode that builds changes made to the sourcecode on the fly instead of waiting for you to manually rebuild.
At the moment, however, it is required to build the client with `npm run build` once, before you use the *serve*-mode.

## Docker Container

You can grab the [Official Container](https://hub.docker.com/r/kruptein/planarally) with this command.  
`docker pull kruptein/planarally`

Generally for ease of backup it is recommended to use [volumes](https://docs.docker.com/storage/volumes/) with docker as well.  
```bash
docker volume create data
docker volume create assets
```
Both of those commands will create folders in /var/lib/docker/volumes/ then you can use this next command to start the container  
`docker run -d -t -p 8000:8000 -v data:/planarally/data/ -v assets:/planarally/static/assets/ --name planarally kruptein/planarally`

then just like it was mentioned in the section above you can just type `http://localhost:8000` and access planarally.

See also this [write up on setting up a server with SSL encryption written by a community member](https://github.com/edmael/selfhosted-planarally) using an nginx reverse proxy as well as docker-compose.

### Docker Container with Docker-Compose and Traefik

Here is an example configuration using [docker-compose](https://docs.docker.com/compose/) and 
[traefik](https://containo.us/traefik/), a docker reverse proxy manager. This is assuming that your
traefik external network is named ```web``` as well.

#### docker-compose.yml

It is important to note the changes needed to ```domain.com``` to match your domain and to the paths to both 
the ```assets``` and ```data``` folders. These volumes can be whatever you please. 

```yaml
---
version: "3"

networks:
  traefik_network:
    external:
      name: web

services:
  # Media Server
  planarally:
    image: kruptein/planarally:latest
    restart: unless-stopped
    networks:
      - traefik_network
    volumes:
      - "/path/to/data:/planarally/data/"
      - "/path/to/assets:/planarally/static/assets/"
    labels:
      - "traefik.http.services.pa.loadbalancer.server.scheme=http"
      - "traefik.http.services.pa.loadbalancer.server.port=8000"
      - "traefik.enable=true"
      - "traefik.docker.network=web"
      - "traefik.http.routers.pa-http.service=pa"
      - "traefik.http.routers.pa-http.rule=Host(`pa.domain.com`)"
      - "traefik.http.routers.pa-http.entrypoints=http"
      - "traefik.http.routers.pa.service=pa"
      - "traefik.http.routers.pa.rule=Host(`pa.domain.com`)"
      - "traefik.http.routers.pa.entrypoints=https"
      - "traefik.http.routers.pa.tls=true"
      - "traefik.http.routers.pa.tls.certresolver=dns"
      - "traefik.http.routers.pa.tls.domains[0].main=domain.com"
      - "traefik.http.routers.pa.tls.domains[0].sans=*.domain.com"
      - "traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https"
      # these are required, this forces the websocket to forward over https
      - "traefik.http.routers.pa.middlewares=ssl-header"
      - "traefik.http.middlewares.ssl-header.headers.customrequestheaders.X-Forwarded-Proto=https"
```

## Backups

When backing up your data the only items you really need to worry about are _/data/planar.sqlite_ and the _/static/assets/_ directory both of which will be included in the _/planarally_ directory. planar.sqlite is the main database file.
