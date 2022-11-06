---
layout: ../../../layouts/docs.astro
setup: |
    import Eye from "~icons/fa-solid/eye"
    import Warning from "/src/components/directives/Warning.astro"
    import Tip from "/src/components/directives/Tip.astro"
---

# Draw Tool

The draw tool can be accessed in the toolbar on the bottom right of the screen by all players, but only in [Build mode](/docs/tools-overview/#toolbar-and-modes).

It allows you to draw shapes on the board and is organised in three sections: shape, vision and logic.

## Shape Settings

In the shape settings the desired shape can be chosen as well as some common basic properties for the shape.

Most shapes offer a fill and/or border colour setting.

### Rectangle

One of the most simple shapes, a _rectangle_. While the mouse is pressed down a preview is shown of what the rectangle will look like if you release it.

### Circle

Just like the rectangle, a _circle_ is very simple. The drawn circle will be centered on the location you pressed down your mouse and will have a radius based on where you released the mouse.

### Polygon / Line

_Polygon / Line_ is probably the most complex shape, but it allows the most flexibility.

Unlike all other shapes you don't have to keep the mouse button pressed while drawing. Instead everytime you click somewhere on the board a new point will appear with a line connecting it to the previous point. You're free to cross or re-use pre-existing points.

To signal that the shape is complete you currently use the right mouse button. To cancel the drawing you can press Escape.

If you check the closed polygon checkbox, the last point and first point will automatically be connected upon finishing the shape and the polygon will be filled with the fill colour.

### Paintbrush

Another draw mode is _paintbrush_, which is a freeflow option that offers you the ability to draw whatever.

<Warning title="Performance">
Note that drawing with the _paintbrush_ needs to use a lot of points to represent a shape.
This is generally only advised for small things, as it is pretty bad performance-wise.
</Warning>

### Text

The last draw mode available is _text_.
Set a font-size prior to drawing as you will not be able to change the size itself, later.
You will be able to scale the text-object freely, though.

Instead of dragging, like the other drawing modes, drawing text requires a single click.
This will open a popup asking for the text to be displayed.

Any entered text will be rendered in the serif font used for simple tokens, _centered on the point clicked_ in the first step.
It can be dragged and resized etc. like any other shape.

<Tip title="Edit">
You can edit the text afterwards in the shape properties dialog!
</Tip>

## Vision Settings

The vision settings allow you to pre-configure the lighting and vision settings of the drawn shape.

The block settings are automatically toggled when switching to and from the fow layer,
but you're free to modify them to your needs.

When at least one block setting is enabled, the <Eye /> icon of the tool will be shown with an orange background as a visual reminder.

### DM-only Modes

DMs also can select additional vision draw modes in this section.

_Normal_ mode as expected is the default behaviour.

_Reveal_ and _Hide_ will draw 'magical light' or 'darkness' respectively.
For more information, see [the documentation on magical light and darkness](/docs/dm/lighting-vision/#magical-lights-and-darkness).

_Erase_ will create a shape that works as a (portable) 'hole', piercing through all objects _below_ them in the draw stack, including [floors](/docs/dm/floors/)!
An _erased_ shape will automatically be dropped on the [map layer](/docs/game/gameboard/#map), but can be moved to any layer.

See the [0.26 release notes](/blog/release-0.26#erase-floor-mode-dm) for more info on erase mode.

## Logic Settings

This allows you to pre-configure door-logic for the shape.

This can save you a lot of time when you're mapping your walls and doors!

See [shape logic](/docs/game/shapes/#logic) for more information.
