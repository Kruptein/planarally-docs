---
layout: ../../../layouts/docs.astro
---

# Vision Tool

The vision tool can be accessed in the toolbar on the bottom right of the Game Board in both [modes](/docs/tools-overview/#toolbar-and-modes).
It helps to track vision of multiple tokens.
Its behaviour is different for players and DMs.

## Player

If clicked, the Vision tool will open a list of all objects that are [configured to be a token](/docs/game/shapes/#properties) and that the player has [vision access](/docs/game/shapes/#access) to.
By default, they will be shown active in the list, denoted by having a coloured background.
All modes and tools will only show the vision of those tokens that have an _active_ entry within the Vision tool.

On click, an entry will be deactivated, showing now a grey background-colour.
Simultaneously, the vision of this token will no longer be shown on the Game Board.

## DM

By default, DMs always see everything.
Using the vision tool alone will not change that.
They can, however, [fake player](/docs/dm/settings/#fake-player) to achieve a similar effect to that described above.
In this case, they use the vision tool to define which player's vision they want to see.
