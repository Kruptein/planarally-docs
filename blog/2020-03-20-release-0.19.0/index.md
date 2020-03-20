---
title: Release 0.19.0 - What's new!
date: 2020-03-20 21:02:34
excerpt: "What's new in 2020?"
author: [darraghvt]
---

With 0.19.0 we have our first release of the year!

The topics mentioned in this release update are listed on the left, the full changelog can be found on [github](https://github.com/Kruptein/PlanarAlly/releases/tag/0.19.0).

## Vision

### Floors

One of the biggest additions in this release is the introduction of floors. Just as in real life a building can consist of multiple floors.
Until now if you wanted to emulate this in PA, you would have to either use separate locations or have different areas in one location that represent different floors.
Both approaches require a bunch of jumping around, which is ultimately undesirable.

With this release that changes, the DM can create/delete a floor using the floor button in the lowerleft corner, right next to the layer selector. The number displayed in this box is the active floor number.

Vision and lights work across floors in a natural manner; A token on the upper floor can see a token with a light in the garden through a window, similarly someone in the garden can see the person on the upperbalcony. _Do note that this is no true 3D rendering, so some small edge cases where the height of certain items are unknown can occur._

<video autoplay loop style="max-width: 75vh;">
   <source src="/assets/0.19.0/newfloors.webm" type="video/webm">
   <source src="/assets/0.19.0/newfloors.mp4" type="video/mp4">
</video>

To change floors you click on the floor button in the bottom left and select your desired floor. To change the floor of a shape or a group of shapes, you right click them and use the floor submenu.

**Top tip:** There are some extra keybindings dedicated to floors, which will allow you to switch around seamlessly. Page Up/Down moves you one floor up or down. You can also move a selection of shapes to other floors through keybindings; Ctrl + Page Up/Down will move the tokens one floor up/down, if you want to immediately move along use Ctrl + Shift + Page Up/Down instead.

Note that currently players are free to move to whichever floor they desire. Extra access control will be added in the future, but with the proper vision settings this should actually be completely fine!

Each floor in essence is an entire new set of layers. This also means that there is addditional client side load for each floor you add. In the future an option to only render the active floor will be added for those players that might nog be able to handle the increase in load. The default case with just one floor will have no extra overhead compared to earlier releases.

### bvh removed

## shapes

### badges

### annotations

## tools

### snapping

### touch gestures

### select fixes

## settings

### account settings

## Varia

### ctrl 0

### /load

### version number

### removal of js artifacts
