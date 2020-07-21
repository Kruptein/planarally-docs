# Game Board

This is Planar Ally's heart.
When gaming, you will mostly interact with the game board, moving tokens over a map that shows (or does not show) your character's surroundings and other PC and NPC around them.

## Overview

The game board consists of several *layers* that are drawn on top of each other.
PlanarAlly calls a complete set of these layers a *floor*.
Floors can be stacked vertically atop of each other.
A set of floors is called a *location*.
Locations are, if you want, sets of floors that are stacked horizontally.

As a player, you won't be able to see all layers and you won't be able to interact with all layers you see.
Also, you might not be able to see all floors and you might not be able to enter floors you can see.
You will also only *see* one location at a time.

The layers are introduced below with the functionality relevant for players.
They are documented in-depth with also DM-only functionaltiy [within an own page in the DM-section of this documentation](/docs/dm/layers/).

## Layers

PlanarAlly orders its game board in multiple layers, drawn on top of each other.

As a player, you will not be able to access these layers, individually.
Instead, you will always interact with the *map* layer.
Thus, on this page, the layers are all but presented sketchy, leaving the details for DMs [for a separate page dedicated for DMs](/docs/dm/layers/).

There are, at the moment, three layers players are able to see: the *map*, *grid* and *tokens* layer.

### Map

The *map* layer is the basic layer at the very bottom of all layers.
It serves as the slate where the DM will draw a map or import a picture created in another way.
Players can see but cannot access or modify the map layer.

### Grid

The *grid* layer draws gridlines on the screen, on top of the *map* layer.
At the moment, it only supports squares, but hexagonal maps are on the long-term to-do list.
Players can only see the grid when the GM has turned grid visibility on, but cannot modify it themselves.

### Tokens

The *tokens* layer is above the grid layer and serves as the surface of the gaming board for the players.
This is where your tokens are placed and where you can explore the map and/or fight monsters.
Players can place shapes and move or otherwise modify shapes that they have sufficient access for.

This is mostly done with the [select tool](/docs/tools/select/), but you can also [pan around](/docs/tools/pan/) or [zoom](/docs/tools/zoom/) to get a better view on the surroundings, occasionally [draw](/docs/tools/draw/) something or [ping](/docs/tools/ping) to highlight something on the gameboard for other players.
Also, during combat encounters, the [initiative tool](/docs/tools/initiative) will be displayed free-floating on the gameboard.

### DM-only layers
There are two DM-only layers that players can neither directly see nor directly interact with.
On the [DM](/docs/dm/layers/#dm) layer, the DM can position NPC, monsters, assets or everything else that can be positioned on a layer, for later use.
This way, a band of bandits hidden in the woods or a group of invisible monsters does not need to be imported, placed and positioned *ad-hoc* when encountering them, but can be simply transferred to the *tokens* layer with some simple clicks.

On the [FOW](/docs/dm/layers/#fow) layer (FOW translating to Fog of War), the DM will draw walls and other barriers that hinder movement and/or light to pass.

## Floors

All of the above layers combined make up a *floor*.
This is to support vertically stacked places like dungeons or buildings.
In this cases, every level of a dungeon or building could be represented by a floor.

You can access floors in the menu at the bottom left of the game board.
The selected floor will render on your game board, *above* all layers that are set below it.
Note, though, that you might not be able to see everything of a layer, depending on the [lighting](/docs/dm/light-shadows) and whether you have sufficient access to the tokens on this floor.

As the floors are rendered on top of each others, you might be able to see the floors below the floor you are present on.
A common example for this would be a window, balcony, or even a hole in the boarding.
So if there is nothing hindering your sight, you can still see some things happening on the floors below (e.g. when looking out of a window).

Currently, you can see all floors that exist on a location and can freely change to any floor there is.
However, only the DM can send tokens to other floors.
Note, that even when all your tokens (or your only token) was transferred to another floor, you would still need to change to this floor on your own.

## Locations

Everything you read about up to this point, the layers and floors, together make up a *location*.
As a player, you cannot interact with any other location than the one you're present at.
See the [DM documentation on locations](/docs/dm/locations/) for more information.
