# Draw Tool

The draw tool can be accessed in the toolbar on the bottom right of the screen by all players, but only in [Build mode](/docs/tools-overview/#tools-and-modes).
It allows you to draw shapes on the board. For each shape you have the option to choose the fill colour and border colour (if applicable).

The DM also has some special extra options in regards to the drawing mode, for more info see the documentation on [Magical lighting](/docs/dm/light-shadows/).

The shapes that can be drawn are the *rectangle*, *circle*, *polygon*, *paintbrush*, and *text*.

## Rectangle

One of the most simple shapes, a *rectangle*. While the mouse is pressed down a preview is shown of what the rectangle will look like if you release it.

## Circle

Just like the rectangle, a *circle* is very simple. The drawn circle will be centered on the location you pressed down your mouse and will have a radius based on where you released the mouse.

## Polygon / Line

*Polygon / Line* is probably the most complex shape, but it allows the most flexibility.

Unlike all other shapes you don't have to keep the mouse button pressed while drawing. Instead everytime you click somewhere on the board a new point will appear with a line connecting it to the previous point. You're free to cross or re-use pre-existing points.

To signal that the shape is complete you currently use the right mouse button. To cancel the drawing you can press Escape.

If you check the closed polygon checkbox, the last point and first point will automatically be connected upon finishing the shape and the polygon will be filled with the fill colour.

## Paintbrush

Another draw mode is *paintbrush*, which is a freeflow option that offers you the ability to draw whatever.

:::info Performance
Note that drawing with the *paintbrush* needs to use a lot of points to represent a shape.
This is generally only advised for small things, as it is pretty bad performance-wise.
:::

## Text

The last draw mode available is *text*.
Set a font-size prior to drawing as you will not be able to change the size itself, later.
You will be able to scale the text-object freely, though.

Instead of dragging, like the other drawing modes, drawing text requires a single click.
This will open a popup asking for the text to be displayed.

Any entered text will be rendered in the serif font used for simple tokens, *centered on the point clicked* in the first step.
It can be dragged and resized etc. like any other shape.

:::warning Edit
It is not possible to edit the actual text content of the shape after creating it.
:::
