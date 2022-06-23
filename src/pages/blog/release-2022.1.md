---
title: Release 2022.1
date: 2022-04-20 20:00:00
excerpt: "Finally a new release"
author: Darragh Van Tichelen
layout: ../../layouts/blog.astro
---

It's been _very_ long since the last release, it took more than half a year and I've plenty of reasons for why and how, but in the end I just want to apologise and hopefully we'll see a more regular cadence in the short future :)

## Version format change

_You can totally skip this if you just want to know what really changed!_

Someone familiar with PlanarAlly would probably also notice that the version number has changed. This is something that I alluded to in my wrapup post of 2021 and decided to implement for the first version of 2022.

Although there was nothing necessarily wrong with the original versioning scheme, there was nothing dramatic on the horizon that warranted changing to a 1.0.0 in my opinion, which basically renders the first number meaningless. The ever increasing minor number did not feel like a good solution either, so it was time for something fresh.

We're changing from a major.minor.patch version scheme to a year.minor.patch scheme, where each year will start anew with a 1.0.
This keeps the version numbers small enough to easily reason about them and puts them in a clear timeframe, whereas 0.18.0 could be anywere in the past 3 years.

## Logic Systems

The main new thing for this release is the addition of small logic modules that can be added to shapes.
This release brings two types: Doors and teleport zones.

A new tab has been added to the edit shape dialog from which you can enable, disable and configure the behaviour of these modules.

#### Permissions

Both modules can be configured with a permission system.
The DM will always have access and by default all other players will not.
You can modify the default access as well as configure access for specific players to either enabled/request/disabled, where request means the DM will receive a notification to either allow or disallow the action.

### Doors

When players come across some shape that is blocking access to another area, there are multiple ways in which the DM can provide the players with a way to pass this obstruction. The DM could just move them over the object with their shift-magic-powers. They could simply delete the shape. They could go in the shape properties and disable the "blocks vision" and "blocks movement" properties. Or they could go into build mode and drag the shape in such a way that the players can pass.

I personally tended to use the last option, but my doors are also typically on the fow layer so I had to change both layers and modes, so in short a bit of a hassle.

This is were the door module comes into play. When a shape is configured as a door, its blocking properties can be immediately toggled by just clicking on the shape in play mode from any layer. Nice and easy!

To make things even easier, you'll now also be able to automatically apply this to shapes you're drawing in the draw tool, more on that later!

<video autoplay loop muted style="max-width: 680px;">
   <source src="/blog/release-2022.1/doors.webm" type="video/webm">
   <source src="/blog/release-2022.1/doors.mp4" type="video/mp4">
</video>

In the above video the left door has been configured to be enabled for all players by default and can thus be toggled without issue by the player. The door in front of the player however has been configured with the request permission.
In these cases the DM will receive a request as follows, where they can choose to accept or decline the request, as well as move the camera to the door in question, if they're currently looking somewhere else.

![Logic Door DM Request](/public/blog/release-2022.1/door-dm-request.png)

### Teleport Zones

The second module provides another quality of life improvement.
As you can guess from the name it allows you to setup a shape to act as a special zone where if a shape enters it, it is teleported to another location.

Potential usecases for this feature are stairs to other floors, traps or ... teleportation circles!

The target for these teleportation zones are existing spawn locations, so make sure to set these up first!
These spawn locations can also be on other locations, so interdimensional travel is no problem either.

By default a teleport zone will not immediately activate,
but instead show a notification will be shown to the players while they are in the zone allowing them to activate it at will (e.g. a player might just stand on a staircase but have no intention of moving up).
It is however also possible to configure it to act immediately (e.g. a pit trap is usually not optional!)

<video autoplay loop muted style="max-width: 680px;">
   <source src="/blog/release-2022.1/tp.webm" type="video/webm">
   <source src="/blog/release-2022.1/tp.mp4" type="video/mp4">
</video>

## UI

Two small changes to the tool UI have been made.

### Draw Tool Restructure

The draw tool popout was becoming crowded which was preventing now things from being added.
This release rethings the look of this popout and now uses a structure with 3 separate tabs.

The base tab has the configuration you'll interact with most of the times and is related to the actual looks of the object you're about to draw.

The second tab is focussed on FOW behaviour. The the DM can select the draw mode here. Additionally the blocking properties of the drawn shape can now also be changed from in the draw tool.
These settings will still auto-enable when you select the fow layer, and disable again when selecting another layer. You now however have the choice to configure this for all shapes you're about to draw without having to modify them one by one afterwards.

The last tab is for the new logic systems and currently only offers an option to automatically configure the door module for all shapes drawn. When doing map work I recommend first doing all the walls and then doing a pass for the doors with this setting enabled. (And another pass for the windows with only block movement enabled!)

### Polygon edit UI

A small QoL improvement to the polygon edit UI will now hide the UI while you're dragging as it was just visual noise that sometimes would interfer with your drag operation.

## Asset Management

### Folder drop support

It should now be possible in most browsers to drop folders in the asset manager!

This simple thing was often requested, understandably, but browser support on some of the used functions was not standardized yet, which should now be the case.

### Dimension info

If an asset has dimension info in its name, it will automatically take up the expected amount of grid cells when droppe don the board.

PA looks specifically for a pattern matching ?x? where the question marks represent one or multiple digits. (e.g. 20x20 or 5x12)
With the numbers representing the amount of grids cells in the X and Y direction.

## Server Management

For those people hosting a PA server, we also got some fun changes!

### Disable registration

It's now possible to disable people from registering new accounts, effectively making your server private. Simply configure the `allow_signups` option in your server configuration file and you'll be good to go.

There is no mechanism in place yet to offer the server owner (or someone else) with the ability to admit particular people.
It is however possible to either manually add a new user if you're familiar with python or just enable signups for a short window.

### Admin Dashboard

A barebones admin dashboard can now be enabled, which runs on the same port as the API server.

Using this dashboard you can list all users registered, reset their password or delete them entirely. Additionally you can also list all campaigns.

### Docker arm64 support

A niche feature is that PA now also builds arm64 docker images for the release and dev branches.

### [BREAKING] Subpath Handling

The way subpath hosting is handled has been modified in this release.
If you host a PlanarAlly server that is hosted using a subpath make sure to update your setup.

#### Am I using a subpath ?

Subpath hosting here specifically refers to a setup where you are not hosting PA at the root of your domain (e.g. `http://somedomain.org/`, `http://somedomain.org:2345/` or `http://subdomain.somedomain.org/`), but rather at a subpath (e.g. `http://somedomain.org/planarally/`)

It is now expected that the client is specifically build with subpath information. This means that the PA_BASEPATH environment variable has to be set during build time.

Additionally the path now explicitly has to end with a slash.

If you were using docker, you'll now have to build the image yourself as you'll need to provide this extra information for the client build step using the `--build-arg PA_BASEPATH='/subpath/'` flag instead of the old setup using `--env PA_BASEPATH`

## Bugfixes

A lot of bugs were fixed in this release!

-   Floor not being remembered on reload after "Bring Players" action
-   Shape pasting not properly increasing badge counters
-   Default vision shapes always acting as tokens (regardless of isToken)
-   Map tool aspect ratio lock no longer working
-   Modals will now change location when resizing the window would put them out of the visible screen area
-   Fix scroll bars being visible due to dice canvas not being sized strictly
-   Fix movement blockers intersecting with themselves when moving on the token layer
-   Fix assets becoming invisible when using a subpath setup (only applies to new assets)
-   Fix colour picker not allowing to change the rgba/hsla/hex values manually
-   Account removal not properly redirecting to login
-   Selecting a shape that was drawn in reveal mode no longer removes shadow during selection
-   Removing an asset would remove any campaign using it as their logo
-   Aura direction number input not synching change to server
-   Some memory leaks when changing locations
-   Floor lighting behaviour for late loading images
-   DDraft uploads not progressing in the asset manager
-   DDraft lights not properly being configured
-   [asset-manager] Asset manager would not check for stale files when removing a folder
