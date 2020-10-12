---
title: Release 0.22.0 - What's new!
date: 2020-08-26 20:00:00
excerpt: "What's new in 0.22.0?"
author: [darraghvt]
---

It's been more than 2 months since the latest release, so we're long overdue for an update!
This release does not pack a ton of new features, but does pack one big one: rotation!
Other things in this release are a bunch of performance improvements, some QoL changes to floors and a bunch of smaller changes and fixes.

## Rotation

Rotating shapes is an often asked about feature, for obvious reasons.
This is however a more technical change that required some tweaks in the core of the draw logic,
but it all worked out in the end.

Rotating is done in the select tool, but only in build mode (just like resizing).
When you go into build mode, a rotation specific UI will appear (a line with a ball).
By grabbing the ball and moving around you can rotate a shape freely around its center.

<video autoplay loop muted style="max-width: 680px;">
   <source src="/assets/0.22.0/rotation.webm" type="video/webm">
   <source src="/assets/0.22.0/rotation.mp4" type="video/mp4">
</video>

When multiple shapes are selected, the rotation UI will be drawn around the entire group and allows for rotation of all shapes at once.
This rotation is again performed in relation to the center of this rotation box!

Additionally when you use snapping, the rotation will snap to clean angles of 45 degrees.

## Floor QoL improvements

I've really come to like floors, but there were still some smaller pain points that I hope to address here.

### Accessibility

The DM can now toggle accesibility of floors. Specifically this means that they can prevent players from manually going to a specific floor.

**This does not prevent vision of a floor on the actual playfield** (e.g. a player on a higher floor looking out of a window on a grass field below)

### Rename

Floors can now be renamed, woo.

### Display Order

The order in which floors are displayed in the popup menu is now reversed. It now follows a more logical order where the topmost entry is the highest floor.

### Reordering

It is now also possible to reorder floors, by draggin them around. So you no longer have to make sure everything is preplanned or move a bunch of stuff around manually!

### Fog bug

There was an unnecessary amount of fog being added to lower floors, making them darker.

## Performance improvements

A bunch of performance tweaks have been done that should have a large impact!

### Startup time

Some changes in the websocket handling make it that now the client reacts to server data much faster,
which in turn should be reflected in faster visual loading on all maps.

Additionally floors are now loaded separately on startup with the last visited floor being loaded first.
This should improve the time to first paint dramatically on maps with a lot of floors.

Fontawesome icons used throughout the UI are now loaded with a vue library. In the past all icons were loaded with a fontawesome.js script, now we only load the icons actually used, saving a bunch of data!

The game loop is now only started when the first floor arrives, this is a rather small improvement in th grand scheme of things, but a nice improvement either way.

### Other

Another big improvement is done in shape movement. Group moves are handled more efficiently and fewer data is required for each shape move as well.

A last improvement is that panning will delay updating non visible floors until the pan action finishes, which again benefits maps with a lot of floors.

## Varia

-   There now is a lock/unlock toggle icon in the selection UI
-   Ruler distance readability is improved
-   Grid pixel size is now a client side feature, allowing the player to choose this value depending on which display method they use (e.g. projecter vs laptop screen)

## Bugfixes

-   Aura not displaying when token is outside the visible canvas
-   Firefox location scrollbar when left menu is open
-   Some significant performance bottlenecks
-   Server now quits, referring to docs/tutorial, if client was not built before start
-   Prefer snapped points over grid snapping
-   Remove white icon in topleft menu UI
-   Moving polygons with keyboard would only move origin point
-   Degenerate cases in triangulation
    -   Triangulation code could hit a degenerate case when dealing with slight number differences in the order of 1e-15
    -   Now the triangulation code will only take the first 10 digits after the dot into consideration to prevent numerical instability.
-   Mouseleave events where not triggered in some cases (e.g. alt tab), this could cause some shapes (e.g. rulers) to remain on the screen
-   Map tool resize does not replicate
-   Center calculation polygons with repeated points
-   Location moved shape now properly disappears on the old location

## Reflection on the "Up next"

Last release I added an "Up next" section, to outline some of the things on the roadmap. I wanted to reflect on what the status is with this release completed.

##### done

-   rotation
-   Rework startup sequence
-   Move to fontawesome-vue
-   Floor public visibility
-   Floor tool improvements
-   Fast load current floor

##### partially done

-   preparation work on metadata/export/import

##### not done

-   In-game async asset list
-   Polygon improvements
-   Extend aura options
-   Improve cursor in draw tool
-   Hex grid
-   Blurhash
-   Multiple spawn locations
-   More grouping options

Although this release took a bit longer, I'm still happy with 6 out of 15 done. :)
