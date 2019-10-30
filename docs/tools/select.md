# Select Tool

One of the most used tools is the select tool.  It's purpose is, as the name suggest, to select one or multiple shapes on the board, but also to move or resize shapes.

You can click on a singular shape, or drag a box around a group so that you can move them all together.

When a shape is selected you can move any of the highlighted corner points in any direction you prefer.

To deselect the shapes you can simply click in an empty spot on the board or use the keyboard shortcut `d`.

## Selection order

Shapes on the board are drawn in a certain order that decides which shape should be selected in case of overlap.

You can change the order by right clicking on a shape and moving it to the back or the front of the stack.

## Snapping behaviour

Currently the default PA mode is to try to snap any resize or move operation to the grid.  Sometimes you need to move shapes in such a way that they are not grid aligned, you can accomplish this by holding the `alt` key while doing the operation.

_In the future the default behaviour should become configurable_.

## Moving through terrain - DM only

When the DM creates the map (s)he has the option to define objects that are impassable (e.g. a wall).

There are times where the DM wants to move a group of tokens through a wall (e.g. to move to another floor) or because a character is stuck in a wall somehow.  For this reason a special DM-only modifier is available, the `shift` key.  While this key is pressed PA will ignore movement constraints.