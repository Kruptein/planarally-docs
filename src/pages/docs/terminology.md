---
layout: ../../layouts/docs.astro
setup: import Warning from "/src/components/directives/Warning.astro"
---

# Terminology

This document aims to avoid confusion and to make it clear what is exactly meant with certain terms that have a very specific meaning in the PlanarAlly context.

## Assets - Shapes - Tokens

This triplet of names are common occurences that in normal conversations can roughly be substituted for eachother.
In PlanarAlly however they have a very specific meaning. Especially understanding "Tokens" is very important.

### Assets

Assets are media files uploaded using the asset manager and available to be dropped on the board from the DM assets sidebar.

When the docs talk about assets they are mostly talking about this representation.

Currently the modal to change shape properties is still called 'Edit Asset'.
This should be changed to 'Edit Shape' in the short future, to streamline this terminology.

### Shapes

Shapes is the most general name for anything that can be interacted with on the board, this can be a handdrawn rectangle or an asset that was dropped on the map.

### Tokens

Tokens are those shapes that have the `is Token` property set.
This property has very specific implications.

A shape marked as a token, or a token for short, can **see** things when using the vision and lighting system.
All shapes can have light sources attached to them, but **only** the tokens will be able to see things.

This is specifically done, because it requires more processing power to do the actual vision calculations and thus we prefer to only do this for shapes that actually matter.

In practice this means that usually only the characters the players control are marked as a token. NPC's or monsters usually have no need for this concept of vision as the DM controls them. Some exceptions are ofcourse possible and that's all up to you and your group.

<Warning>When your DM uses line of sight, make sure your character is a token or you won't be able to see anything!</Warning>
