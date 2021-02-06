# Spell Tool

The spell tool can be accessed in the toolbar on the bottom right of the screen by all players, but only in [Play mode](/docs/tools-overview/#tools-and-modes).

It has some similarities to the draw tool, but is focussed specifically to casting spells during play.

You can select your spell shape (square/circle/cone) and configure its size, range, colour and lastly whether your spells will be shared with other players or if it's just for yourself.

Noticeably absent in the list of spell shapes is the line, which is a common pattern in spell casting.
We found the existing ruler tool to suffice here and found it unnecessary to add extra bloat to the spell tool.

<video autoplay loop muted style="max-width: 680px;">
   <source src="/assets/0.25.0/spell.webm" type="video/webm">
   <source src="/assets/0.25.0/spell.mp4" type="video/mp4">
</video>

## General operation

Unless range is set to 0, your spell will follow your mouse at all times when you have the Spell tool active.

The default spell mode is only used for quickly measuring things to see for example how many people you would be able to target.
Your spell will disappear if you change tools.

If you have a spell that is not instantatious, but will remain on the battlefield for longer then you can **left click** to make the spell a real shape.
You will automatically move to the select tool.

If you misclicked, or the spell effect wears out, you can remove the spell as any other shape.
Do also realise that if you have 'show public' turned off, the moment you 'cast' the spell it will get the 'invisible' property!
There is nothing preventing you from removing this property once cast.

Right click will also return you to the select tool, but won't cast the spell.
This is provided as a 'cancel' operation.

## Selection context

The cone shape and the range parameter are only available when you have a shape actively selected.

The former because I couldn't find any examples of cones in the wild being used that are not self-casted,
but also because I had some difficulty imaginging the UX ergonomics regarding rotation in the non self-casting case.

The latter because there is no reference point otherwise.

## Size

The size parameter decides the area the spell covers.
For a square it's the length of 1 side.
For a circle and cone it's the radius of the spell!

Just like auras these numbers are defined in terms of the configured unit size, which defaults to 5 ft. (see DM grid settings)

## Range

_The range of the spell as mentioned above can only be configured if you have an active shape selected._

If the range is set to 0, it is assumed to be a self-cast and will automatically center the spell on your active shape.

If the range is any number >0, a black circle will be shown with its radius equal to the configured range.
This
