# Draw Tool

The draw tool allows you to draw shapes on the board.  For each shape you have the option to choose the fill colour and border colour (if applicable).

The DM also has some special extra potions in regards to the drawing mode, for more info see the documentaion on [Magical lighting](/docs/dm/light-shadows/).

The shapes that can be drawn are the rectangle, circle, polygon and paintbrush.  We'll go briefly over each of them to explain some of the finer details.

## Rectangle

One of the most simple shapes, a rectangle.  While the mouse is pressed down a preview is shown of what the rectangle will look like if you release it.

## Circle

Just like the rectangle, a circle is very simple.  The drawn circle will be centered on the location you pressed down your mouse and will have a radius based on where you released the mouse.

## Polygon / Line

This is probably the most complex shape, but it allows the most flexibility.

Unlike all other shapes you don't have to keep the mouse button pressed while drawing.  Instead everytime you click somewhere on the board a new point will appear with a line connecting it to the previous point.  Additionally, depending on the 'closed polygon' checkbox, it will also connect the first and last point to close the polygon.

To signal that the shape is complete you currently use the right mouse button.  To cancel the drawing you can press Escape.