# Self-hosting

Hosting PlanarAlly yourself requires a bit more setup then simply using an existing service, but it does give you more control and you can rely on it working offline as well.

To host PlanarAlly yourself you have three options:

* Perform a manual installation
* Use a precompiled executable
* Use a docker container under Linux

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

## Docker Container
You can grab the [Official Container](https://hub.docker.com/r/kruptein/planarally) with this command.  
```docker pull kruptein/planarally```  

Generally for ease of backup it is recommended to use [volumes](https://docs.docker.com/storage/volumes/) with docker as well.  
```docker volume create data```  
```docker volume create assets```  
Both of those commands will create folders in /var/lib/docker/volumes/ then you can use this next command to start the container  
```docker run -d -t -p 8000:8000 -v data:/planarally/data/ -v assets:/planarally/static/assets/ --name planarally kruptein/planarally```  

then just like it was mentioned in the section above you can just type `http://localhost:8000` and access planarally  

You can find a write up [here](https://github.com/edmael/selfhosted-planarally) written by a community member on setting up a server with SSL encryption using an nginx reverse proxy as well as docker-compose

## Backups
When backing up your data the only items you really need to worry about are */data/planar.sqlite* and the */static/assets/* directory both of which will be included in the */planarally* directory. planar.sqlite is the main database file.