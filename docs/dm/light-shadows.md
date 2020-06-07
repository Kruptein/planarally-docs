# Lighting & Vision

In this section we'll describe how you as a DM can bring more life to your dungeons and provide your players with a dynamic experience!

As the title suggests there are 2 core ideas in PlanarAlly that are responsible for how your players perceive the board state.

By adding lights (or darkness) to some places on the map, you immediately bring more personality to a place, additionally you can place a torch on someone's character and you get an even greater sense of dungeon delving.  Placing lights all over your map however will already spoil some cool locations to your players when they're only at the entrance.  To prevent this the vision of a certain character needs to be taken into account and if we have that we should have a very immersible experience.

We'll first go over some of the lighting setup and will finally discuss how vision works.

## Lighting

There are varying degrees of complexity we can achieve in PlanarAlly and depending on how you want to run your game you'll choose a different method.

There is also 1 DM setting related to lighting called the 'Fill entire canvas with FOW' and this can be found in the Vision tab.  This setting toggles whether the entire screen should be filled with fog by default or not.

### Magical Lights and Darkness

The first kind of lighting is what I call 'magical' lighting because it is so powerful that the magical lights cannot be hidden and the magical darkness can not be pierced by normal lights.

How exciting as this may sound, I actually use these kind of lights rarely as it is very static.  I do use it for some edgecases.

#### How to use

If you select the draw tool as a DM you'll see a mode toggle at the top.  When this is set to reveal, you'll be drawing magical lights, when set to hide, you'll be drawing magical darkness.

All shapes drawn in reveal or hide mode are automatically drawn on the vision (fow) layer! So if you made a mistake or want to remove something for example, go to the vision layer to fix it!

#### When to use

It can happen that you quickly want to show a certain part of the screen to the players, without having to move them all over.  Maybe you want to show the compass on the screen at all times while the entire screen is covered in fog by default.  Or maybe you have a daylight scene with no fog, but want to make sure the contents of a building are not yet revealed until the final showdown.

Another typical usecase is when you as a DM want to grant vision to players as they go, keeping everything they visited visible.  By combining the 'cover everything with fog' option and then drawing with the paintbrush in reveal mode, you can easily paint a path for your players.

### Normal lights

A much more common use of lighting is the use of placing lights on the map.  You can attach a light to any asset and it will radiate from the asset's center.  These lights are able to pierce normal fog but not the magical fog described above.

#### How to use

Open the asset properties by right clicking the asset and selecting 'edit properties'.  Find the section titled 'auras' and start filling in a new row.

You can give the aura a name (e.g. candle) and set its bright radius and dim radius (starting from the bright radius' edge).  To have the aura function as a light, it's important to select the lightbulb icon! If you would like the light source to be visible to other players you can also select the eye icon.

#### When to use

This is the recommended way to add lights to your scene in most cases.  Attaching a light to a token immediately offers dynamic lighting when the token is moved around and combined with vision later on it offers a powerful combo.

## Vision

So far we've managed to add some lights and/or fog to our scene, but there is nothing blocking these lights so they cross over walls on our map unless you were to finetune every light meticulously which will not be fun.

For this reason PlanarAlly offers you the ability to provide input on where walls, doors and other obsctructions are on your map, so that PA can properly assess how a light should behave.

### Light-blocking objects

The essence of providing PA info about walls etc, is by drawing shapes like you usually do and selecting the 'blocks light' option in the shape's properties dialog.  As you often during prep need to draw these shapes, PA offers a dedicated vision layer (FOW) that automatically applies the blocks light (and blocks movement) option on every shape drawn on this layer.  For more info on this specific layer see [the Layers documentation](/docs/dm/layers/).

You can use any of the available shapes to draw your building skeletons, but some are more useful than others.  Although the rectangle can be usefull for simple structures with 90 degrees walls, I find myself using the polygon tool almost exclusively these days. See the [draw tool documentation](/docs/tools/draw/) for more detailed info on how these shapes behave.

_note that this only blocks normal lights.  'magical' lights pierce through any non magical fog._

### Line of Sight

The last setting that we still need to discuss to complete the light and vision setup, is the line of sight setting in the DM settings.

Without this setting enabled, we have our lights illuminating rooms with the lights properply stopping at the edge of our walls.  What we don't have is a notion of what a character can see.  All rooms with a lightsource will be visible, whether there is a player in the room or not.

When you enanle the line-of-sight setting in the DM settings, PlanarAlly will take position of player characters into account and only lights that are actually visible for a token are shown to the players.

**Important**: For performance reasons this setting will only take into account those assets that are specifically marked as a **token** in their properties dialog.  This means that with the setting enabled but no asset marked as token, your players will have **no vision**.
