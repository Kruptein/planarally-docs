---
layout: ../../../layouts/docs.astro
---

# Snapping

Many elements in PlanarAlly have some form of snapping behaviour.
Two types of snapping exist: snapping to the grid and snapping to points.

Snapping to the grid is pretty self explanatory, if you move shapes around you often want them to be properly placed on the grid.
By using grid snapping you don't have to be super accurate and PlanarAlly will do the work for you.

The second form of snapping is the ability to snap to another existing point.
Point being defined here as points of existing shapes, e.g. the corners of a rectangle or the points in a polygon.

By default snapping is enabled and acts on most operations (e.g. moving/resizing/rotating).
You can disable this behaviour for a specific operation by pressing the `alt` modifier during the action.

If you want to disable it permanently you can invert the behaviour in the [client settings](/docs/game/settings/), which will make the `alt` key act as a modifier to enable snapping instead.

## Examples

When drawing a polygon, every point clicked will try to snap to a nearby grid point or to an existing point.

When resizing a point, it will try to snap to a grid point or existing point.

When rotating a shape, the rotation will snap to multiples of 45 degrees.
