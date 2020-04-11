# Self-hosting

Hosting PlanarAlly yourself requires a bit more setup then simply using an existing service, but it does give you more control and you can rely on it working offline as well.

To host PlanarAlly yourself you have two options:

* Perform a manual installation
* Use a precompiled executable

The former is very technical, so most people are best served with the executable which does not require much work.  I just like to point out the options for those who like more control over the installation or don't trust some random exe.

## Precompiled executable

You can find the latest version [on github](https://github.com/Kruptein/PlanarAlly/releases/).
Download the `planarally-windows.zip` and extract it somewhere in a new folder.

This folder contains a lot of different files, but the important one for you right now is the one titled `PlanarAllyServer.exe`.
When you execute this file, a command prompt will appear (a black screen with some text).

If everything went well you should now be able to visit `http://localhost:8000` and be greeted with the login screen.

For more info on how to configure some other aspects of your server visit the main [server management](/docs/dm/management/) docs.

## Manual installation

If you want to manually install PlanarAlly, you'll need to make sure you have python 3.6 or newer installed, you can get this from the [python site](https://www.python.org/downloads/).

To get the source files you can either download a zip for a particular version from [github](https://github.com/Kruptein/PlanarAlly/releases/) or
clone the repository with git.

Everything needed to run PlanarAlly can be found in the `server` folder.

Make sure to install all dependencies by running `pip install --user -r requirements.txt`.
(If you are familiar with python, it is strongly advised to create a dedicated venv for PA, but this is not a hard requirement.)

To run the server you now simply run `python3 planarserver.py` and your server should start up.

If everything went well you should now be able to visit `http://localhost:8000` and be greeted with the login screen.

For more info on how to configure some other aspects of your server visit the main [server management](/docs/dm/management/) docs.

## Backups
When backing up your data the only items you really need to worry about are */data/planar.sqlite* and the *static/assets/* directory both of which will be included in the *planarally* directory.


## Self Host Planarally with Nginx and Letsencrypt using Docker + docker-compose
*Originally written by [edmael](https://github.com/edmael/selfhosted-planarally/blob/master/README.md)*  

This guide aims to walk you through the process of setting up a server with a dockerized version of nginx, let's encrypt and [PlanarAlly](https://github.com/Kruptein/PlanarAlly) so that you can run your own instance of the amazing virtual tabletop software created by [Kruptein](https://github.com/Kruptein).

Before we begin make sure to have:
* a server with a static IP (a CX11 from [Hetzner](https://www.hetzner.com/cloud) works really well for 3.04€/month)
* a domain with full control on your DNS records (if you need to buy one I suggest [Gandi.net](https://www.gandi.net/) and [Porkbun](https://porkbun.com/))
* an A/CNAME record called planarally pointing to your server static IP (even pa.yourdomain.com or anything else will work, just remember to have an A/CNAME pointing to your IP and use it in Part Two of the installation)

The instructions in this page are ready for a quick copy and paste session in an **Ubuntu 18.04** environment, but should work in every Linux environment (you'd just need to adjust them a little in some cases).

### Part One - Installing Docker and Docker-compose
First of all we need to install the tools we'll be using to put everything in place.

Let's refresh the repositories and make sure we have everything in place to install Docker:
```
sudo apt update && sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Now let's add Docker's GPG key...
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

... and its repository:
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

Ok, now let's update our repositories and install Docker:

```
sudo apt update && sudo apt install docker-ce
```

To check if everything went well you can run this command and see docker running on your system:  

```
sudo systemctl status docker
```

We're almost there! Docker is up and running on our server, we just need to install Docker Compose, a nice utility that will help us in the next steps. Let's download Docker Compose binaries and put them into /usr/local/bin folder:

```
sudo curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

Now give them the right permissions:

```
sudo chmod +x /usr/local/bin/docker-compose
```

And here we go: **Docker** and **Docker Compose** are ready to be used on our server!

### Part Two - Setting up Let's Encrypt and Nginx
This part is not needed to setup a PlanarAlly server, but if you want to have more services running alongside PA - like I do - it's useful to have something acting as webserver and reverse proxy (ignore these words and follow the instruction if they means nothing to you).

We're going to use a docker image created and maintained by the awesome guys at [Linuxserver.io](https://www.linuxserver.io/): check their works if you're intrested in docker since it's always top notch ;)

Ok, first things first: let's create a directory in our home where we'll put all our stuff. To do so we'll position ourself in our home directory.

```
cd
```

Let's create the folder (you can name it as you want, but I'll refer to it as **webserver** from now on) and move there.

```
mkdir webserver && cd webserver
```

Now we need to create a docker-compose.yml file where we're going to configure (almost) everything we need.

```
nano docker-compose.yml
```

Here's where the magic happens so paste this in nano and edit it following your needs:

```
version: "2"
services:
  letsencrypt:
    image: linuxserver/letsencrypt
    container_name: letsencrypt
    cap_add:
      - NET_ADMIN
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - URL=yourdomain.com
      - SUBDOMAINS=planarally
      - VALIDATION=http
      - EMAIL=your@email.com
      - DHLEVEL=2048
    volumes:
      - /home/USER/webserver/persistent:/config
    ports:
      - 443:443
      - 80:80
    restart: unless-stopped
```
Basically what you need to check are those lines:

```
      - TZ=Europe/London
      - URL=yourdomain.com
      - SUBDOMAINS=planarally
```
Here you should set your timezone, your domain and the subdomain with the A/CNAME record pointing to your server. Remember to also set a working email here ```- EMAIL=your@email.com``` since you'll receive there any information regarding your SSL certificate.

Change this path ```- /home/USER/webserver/persistent:/config``` by using your actual username instead of "USER".

Save the file and let's run this thing!

```sudo docker-compose up -d```

Give it a few minutes and you should have a nice nginx webserver up and running. To check everything's fine you should open a browser and go to ```https://planarally.yourdomain.com```: it should show a white page with a "Welcome to our server" title.

Ok, now we just need to prepare nginx to act as reverse proxy for your PlanarAlly docker image (again, if this means nothing to you just copy and paste). To do so, we need to add a configuration file in our proxy-confs folder:

```
cd webserver/persistent/nginx/proxy-confs

nano planarally.subdomain.conf
```

In the empty file just created paste this:

```
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name planarally.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    #enable for ldap auth, fill in ldap details in ldap.conf
    #include /config/nginx/ldap.conf;

    location / {
        #enable the next two lines for http auth
        #auth_basic "Restricted";
        #auth_basic_user_file /config/nginx/.htpasswd;

        #enable the next two lines for ldap auth
        #auth_request /auth;
        #error_page 401 =200 /login;

        include /config/nginx/proxy.conf;
        resolver 127.0.0.11 valid=30s;
        set $upstream_app planarally;
        set $upstream_port 8000;
        set $upstream_proto http;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;

    }
}
```
Save, close and we're ready to finally add PlanarAlly to our mix!

### Part Three - Setting up PlanarAlly
There's little to do here actually, we just need to return to our docker-compose.yml file and add a section for PlanarAlly. To do so first position yourself back into our work directory and then edit the file we created early with:

```
nano docker-compose.yml
```

Add these lines at the end of that file:
```
  planarally:
    image: 'kruptein/planarally'
    container_name: planarally
    volumes:
    - 'data:/planarally/data'
    - 'assets:/planarally/static/assets'
    restart: always

volumes:
  data:
  assets:
```
Save and let's run again docker-compose.

```sudo docker-compose stop && sudo docker-compose up -d```

Wait a couple of minutes (based on how beefy is your server) and go to ```https://planarally.yourdomain.com```: you should now see your **PlanarAlly** instance ready to be configured and used to play ([here](https://www.planarally.io/docs/) you can find its documentation if you feel a little lost).