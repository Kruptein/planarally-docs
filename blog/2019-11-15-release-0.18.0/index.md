---
title: Release 0.18.0 - What's new!
date: 2019-11-15 21:02:34
excerpt: "A dive into the new goodies in the upcoming 0.18.0 release."
author: [darraghvt]
---

It's been a while (~5 months) since the last PlanarAlly release.  This delay has been partly caused by my personal campaign taking up a lot of time, but also due to some technical features that aren't even ready for this release :(.

Anyway let's go through some exciting things that actually did make it in time!

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

#### Open Polygons

#### Brush size polygon

#### Circle borders inset

## Layers

### FOW invisible eveyrthing

## Location Bar

### Location colour active

## Bug Fixes

### Lock state works properly upon joining

### Sessions with slash

### Ruler zoom width

### Brushhelper sticking around

### Temp shapes sticking around

### Private data reveal on move