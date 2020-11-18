# Select Tool

One of the most used tools is the select tool.
It's purpose is, as the name suggest, to select one or multiple shapes on the board, but also to move.
It can be accessed in the toolbar on the bottom right of the screen by all players, but behaves differently, depending on the active [mode](/docs/tools-overview/#tools-and-modes).

Additionally when in build mode, it also allows you to rotate and resize shapes.

## Selecting basics

You can click on a singular shape, or drag a box around a group so that you can move them all together.

To add shapes to an existing selection, hold down `Ctrl` and select new shapes.

To deselect the shapes you can simply click in an empty spot on the board or use the keyboard shortcut `d`.

_When doing a group select, only shapes you actually own will be selected. This in contrast to the normal click behaviour that can also select non-owned shapes._

## Resizing

_To resize a shape you must be in 'build' mode_

Resizing is done by simply grabbing one of the corners of the shape and dragging them to another place.
Most resize operations only affect the corner dragged, leaving all other corners in place.

The only current exception to this are circles, who instead increase/decrease the radius on resize.
This behaviour might change in the future.

## Rotating

_To rotate a shape you must be in 'build' mode_

A special rotation UI is visible in build mode that shows an anchor point and a box.

When you move the anchor, you rotate the entire box around its center point.

Rotating shapes is not limited to singular shapes, but can allso be applied on an entire group.
Do remember that the center of the box will be used as the rotation point.

<video autoplay loop muted style="max-width: 680px;">
   <source src="/assets/0.22.0/rotation.webm" type="video/webm">
   <source src="/assets/0.22.0/rotation.mp4" type="video/mp4">
</video>

Rotating also has [snapping behaviour](/docs/player/snapping/) to common angles (multiples of 45 degrees).

## Selection order

Shapes on the board are drawn in a certain order that decides which shape should be selected in case of overlap.

You can change the order by right clicking on a shape and moving it to the back or the front of the stack.

## Moving through terrain - DM only

When the DM creates the map (s)he has the option to define objects that are impassable (e.g. a wall).

There are times where the DM wants to move a group of tokens through a wall (e.g. to move to another floor) or because a character is stuck in a wall somehow. For this reason a special DM-only modifier is available, the `shift` key. While this key is pressed PA will ignore movement constraints.
