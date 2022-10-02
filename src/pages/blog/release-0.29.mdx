---
title: Rolling gently into fall - Release 0.29.0
date: 2021-10-28 20:00:00
excerpt: "What's new?"
author: Darragh Van Tichelen
layout: ../../layouts/blog.astro
---

It's been a while, we've been long overdue for a new release!
The release is not super big, but does have some fun new tools to play with as well as the usual array of bugfixes.

## Virtual Dice

A first big thing, is virtual dice rolling!
A word of caution though, the version that ships in this release is not polished yet.
I hope to get some feedback on how things feel to further shape the future of the dice roller.

Rolling dice is available as a dedicated tool in play mode and this for both DM and players.
You can construct a set of dice (currently limited to dX dice) and let them roll on the screen.
The result will appear on screen in a dialog and will also be remembered in the dice tool itself.

You can optionally choose to share dice results with all players, which will show a small notification on their screen when you roll.
(i.e. the dice are not visually rolled on other player's screens)

#### A note on behaviour

The dice are emulated/approximated with a proper physics system. It can happen that PA assumes the die has landed on its final position and show a result and yet have the die roll over one last time. These kinks will be ironed out in the future, if you intend to heavily use this in your campaign, it might be wise to decide upfront which value you treat as the real value

#### A note on loading

The dice use a full 3D render system (shoutout to babylonjs and ammojs). This brings in a lot of extra code through the dependencies which increases the bundle size greatly and thus the loading time of PA.

To circumvent this, all dice related code is not loaded during the main PA load, but instead deferred until the time you click on the dice tool the first time. This means there might be a small delay the first time you interact with the dice tool.

## Draw tool pointer

A while ago, the decision was made to no longer show the mouse pointer when using the draw tool as it is never 100% in sync with the PA draw loop causing some visual lagging between the real cursor and the in-game assumed cursor.

Without the out-of-sync cursor, draw operations feel smoother, but it became rather easy to lose track of where on the canvas you actually are. This even more so when you're drawing in transparent colors or colors very close to the background of the map.

This release re-adds a mouse cursor, not the real OS mouse cursor, but a fake mouse cursor that is just a polygon in PA itself, which as it is a PA shape will always be in sync with the draw loop and thus feel smooth.

## Polygon edit tools

Since the introduction of polygons a long while back, it's easily been my most used shape especially for everything lighting/vision related.

Sometimes I forget that a certain wall had a secret door and fixing that in session is kinda hard as you would have to remove the entire wall and redo it, which depending on how long the polygon is, can be a big pain. Or you just shift the character(s) through the wall, which is what I mostly fall back to.

This no longer has to be the case, as I finally added tools to modify existing polygons!

When you select a polygon in build mode, extra UI will appear near the polygon and follow your mouse.
When hovering over an edge, you'll have the option to either add an extra point to the polygon or split the polygon at that point.
When hovering over a point, you'll be able to remove the point.

## Server admin CLI

_This was contributed by CalebKoch_

The python server has gained some extra utilities to manage the server without having to dive into a python shell.

In particular it can now:

-   list all users
-   list all rooms (i.e. campaigns)
-   remove a specific user/room
-   reset a user's password

## SVG wall handling

Since release 0.26.0 it's been possible to attach wall information in the form of an svg file to pretty much any object in PA, although the primary use case is obviously for maps.
It extracted the path info from the svg and stored it in the options of the shape for quick access.

The old path extraction ignored any potential transforms set on the elements (e.g. translate/scale) and could thus result in sometimes having to flip the svg manually over the y-axis to get the proper result in PA.

A new implementation of the svg handling has been written, which no longer keeps the entire path associated with the asset, but only a reference to the actual svg, which is then parsed separately on the fly, allowing any future improvements to svg handling to also be applied to existing assets.

One such improvement is the support for translate and scale transforms.

Because I didn't want to break existing svg flows, you'll have to reapply the svg if you wish to benefit from the new and improved svg handling.

Somewhere in the future I intend to remove the old svg handling code, so I would strongly recommend to reapply all your svg masks that you use or they might stop working in the future (Specifics will be communicated later).

## UI improvements

### active tool-mode

The last release changed the UI related to the tool modes (i.e. Play and Build).
The distinction between the two has been increased further to make it clear which mode is currently active.

### vision settings

It's no longer possible to configure a max vision range that is smaller than the min vision range and vice versa.

### angle UI

Auras usually are full 360 degrees circles, this can however be configured along with a viewing angle to orient the aura in a particular direction.
The UI for the viewing angle now also offers a number input if you want to be more precise or don't like the circle input element.

### variant switcher

The variant switcher got disabled with the big vue3 update partly because I felt it was too buggy and not really used by others.

I was apparently very wrong about that last assessment as I got multiple questions about why the variants no longer worked.

My apologies to those, it's been re-enabled in its original functionality!

#### Fixes

Two bugs were also fixed related to shapes with variants:

##### Trackers/Auras

The shared tracker/aura logic had some logic issues with inconsistent behaviour as a result.

They should now properly work :)

Additionally when changing variants and the previous variant had (multiple) non-shared auras, some of these would remain on screen, but not move along (i.e. static). This was also resolved.

##### Location changing

When moving a shape with variants to another location, only a part of the variants was moved, causing multiple issues all around (including the old location no longer being able to load).

## Bugfixes

-   Locked shapes being able to move locations
-   Locked shapes being able to change floors
-   vision min range equal to max range bug
-   Angled auras not rotating with general shape rotation
-   Multiple styling issues in firefox
    -   Annotations no longer fill entire screen width
    -   Aura UI being way to wide
-   Viewport sync
    -   viewport is sent immediately upon connecting (and does not wait for the first pan)
    -   DM viewport move is now throttled and should no longer appear laggy on the client
-   Various DPI related fixes
-   Multiple experimental vision mode bugs
    -   Fix startup not working correctly
    -   Fix unsnapped move of blocking shape not updating movement triangulation
-   Movement block not updating directly when not using snapping
-   Some performance dropoff for big polygons
-   Remove lingering rotation UI when removing a shape in build mode
-   Select tool showing ruler without selection
-   Text resize not live-syncing to other clients
