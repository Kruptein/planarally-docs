---
layout: ../../../layouts/docs.astro
---

# Map Tool

The Map tool can be accessed inthe toolbar on the bottom right of the Game Board, but only in [Build mode](/docs/tools-overview/#toolbar-and-modes) and only by the GM.
It offers an easy to use method to fit a custom shape to the grid.
It can be used to resize arbitrary shapes, but its core use is focused on maps.

To use the map tool, a shape first needs to be selected.
If this is not the case the map tool will inform you of this and you'll be able to select a shape from within the map tool without switching to the select tool.

If a shape is selected, you'll be able to select an area in this shape that you want to use as a reference, or scale the full image.
Note that in either way the whole image is scaled.
Scaling 'the full image' simply takes the full image for reference, without selecting only a part for reference.

## Select Area

Selecting an area is done by dragging a box around it.
For example, you can select an area that should represent a 3 by 3 area on the grid.
You can resize and further tweak this selection after your initial selection to make sure it covers exactly what you desire.

If the selection is adequate you can insert the X and Y dimensions the selected area should occupy and press apply.

<video autoplay loop muted style="max-width: 680px;">
   <source src="/blog/release-0.20/maptool.webm" type="video/webm">
   <source src="/blog/release-0.20/maptool.mp4" type="video/mp4">
</video>
The above is an example of using the map tool to refit the imported map asset to the grid.
We selected an area, performed some slight modifications and then informed the tool of the desired dimensions.

## Scale Full Image

Scaling 'the full image' takes the whole image as reference for scaling.
This can be done either by setting target grid cells or target pixels.
Targeting grid cells will make the image cover the given amount of grid cells, while targeting pixels will resize the image according to the input.
Both alternatives can be told to keep aspect ratio of the image by connecting the 'links'-symbol right to the inputs.
