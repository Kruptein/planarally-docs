---
title: Release 0.18.0 - What's new!
date: 2019-11-15 21:02:34
excerpt: "A dive into the new goodies in the upcoming 0.18.0 release."
author: [darraghvt]
---

It's been a while (~5 months) since the last PlanarAlly release.  This delay has been partly caused by my personal campaign taking up a lot of time, but also due to some technical features that aren't even ready for this release :(.

Development hasn't stopped in the meanwhile however!  We got a lot of nice contributions to PA from @Daniferitto and @CalebKoch to name a few.

The topics mentioned in this release update are listed on the left, the full changelog can be found on [github](https://github.com/Kruptein/PlanarAlly/releases/tag/0.18.0).

Before diving into the list of changes I would also like to notify a couple of important changes to version 0.19.0 of PlanarAlly.

##### Changes on the horizon (0.19.0+)

Up until now the option was there to choose between the newer "triangle" vision mode or the older "bhv" mode.

From 0.19.0 onwards, the bhv mode will disappear.  It hasn't received any fixes in recent times and is simply inferior in every aspect compared to the triangle mode.

Another vision mode will make its entrance in 0.19 which I'm gonna dub 'triangle+'.
It's the same vision algorithm but instead of having to recalculate the entire triangulation on every change, it will actually change the triangulation live.

This means that any bug in this system will irrevocably brick the triangulation, which is the reason that I launch it as an optional feature to start with.

This new vision mode should be even faster than the existing triangle mode as it won't have to recalculate the entire vision space upon a small change.

## Customisation

### Units of length

First on the list is the addition to change the unit representation for distance.  Up until now this was always hardcoded in feet (i.e. ft.) mostly due to the official dnd source books using this for everything.

Now it's possible to choose the representation on a per-location basis.  So you could have a "worldmap" location with units in km and another "city" map with units in meters!

To change the active location's size unit, go to the DM Settings and open the grid tab.

<video src="/assets/0.18.0/size-units.webm" type="video/webm" autoplay loop></video>

## Tools

#### Right click in every tool

Previously the right click menu was only available when the select tool was active, this was pretty annoying and thus the change was made to provide this in every tool.

#### Ping tool

A new addition to the tool list is the ping tool.

A common lifehack in the past was to use the ruler and rapidly spin around to get some attention to a certain area of the map.  This is obviously suboptimal and thus the need for some sort of ping tool arose.

This new ping tool is a very barebones implementation that offers some solution to the above problem, providing the DM and players with a slightly more elegant form to highlight where they want attention.

<video src="/assets/0.18.0/ping-tool.webm" type="video/webm" autoplay loop></video>

The idea is to further expand upon this in the future with some animation options to grow/shrink the ping symbol.

### Select Tool

#### Group operations

Moving a group of tokens to different layers had to be done token by token in the past.

Now the entire selection can be moved to the desired layer at once!

<video src="/assets/0.18.0/group-select.webm" type="video/webm" autoplay loop></video>

#### Ctrl select tokens

Together with the group selection another quality of life change has been added to the select tool.

You're now able to add shapes to the active selection using the control key.  You can either ctrl click a single shape to add or drag a new selection box while pressing the ctrl-key to add multiple shapes at once.

<video src="/assets/0.18.0/ctrl-select.webm" type="video/webm" autoplay loop></video>

### Draw Tool

#### Escape to cancel

It's now possible to cancel the active shape draw by pressing the escape key.

<video src="/assets/0.18.0/escape.webm" type="video/webm" autoplay loop></video>

#### Open Polygons

The polygon tool already was one of my most used tools, but now with the addition to have open polygons it's been my goto method to quickly create walls and other light blocking objects.

Just like the closed variant, the open polygon is a shape that can be drawn by clicking where you want to add a point to the polygon shape and right clicking to signal that the shape is complete.
It does however **not** create an automatic connection between the first and last points of the polygon.

Another difference is that the open polygon has no fill colour as there is no area in between the points that gets filled.

I use this shape extensively for rapidly drawing walls.

<video src="/assets/0.18.0/openpolygon.webm" type="video/webm" autoplay loop></video>

#### Brush size polygon

Along with the addition of open polygons, polygons now also have a brush size just like the paint-brush tool.

<video src="/assets/0.18.0/brushsize.webm" type="video/webm" autoplay loop></video>

#### Circle borders inset

Because creating circular tokens often had to be resized to fit a grid cell, the decision was made to make the circle borders inset.

## Layers

### FOW invisible everything

Every shape on the FOW layer is now invisible when another layer is selected.
In the past this only applied to shapes that had the visionObstruction option active, but now this is applied to all shapes on the layer.
This is purely related to the actual shape visibility, any aura applied to the shape will still be visible!

This allows for lights to be setup without them being visible to the players or for some see-through invisible walls and other good stuff.

## Location Bar

### Location colour active

A nice quality of life change brings a highlight colour to the current active location in the location bar, so that you're sure where you are ;).

## Bug Fixes

A short list of prominent bug fixes.

### Private data reveal on move

The most important bug fix is the one where during a shape move, the DM specific settings would be lost and thus some information would become public to the players,
including aura's and other vision related settings.

This resulted in some areas of the map suddenly becoming visible during a mouse move, but then become revealed again when the mouse was released.
This should now behave properly.

### Lock state works properly upon joining

The new lock feature for DMs showed a wrong state when opening a session.

### Sessions with slash

Sessions with a slash in their name would not work.

### Ruler zoom width

The ruler tool had an inconsistent width across multiple zoom levels.  It now has the same screen width at any zoom level.

### Brushhelper sticking around

The brush helper (the preview dot) would often stick around in some edge cases.  It should now properly disappear when changing tools or layers.

### Temp shapes sticking around

When a player leaves or reconnects while drawing a temporary shape it would often stick around until everyone refreshed.
This should now properly be cleared upon player disconnect.