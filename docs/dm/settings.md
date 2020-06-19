# Campaign Settings

As the DM, you’ll have a special window of options. These allow you to configure the settings of the active campaign. You can access this window by clicking the gear icon in the top left corner and selecting “DM Options” from the dropdown menu.

## Admin

![](./settings.png)

The admin section provides administrative options.

In the players section, you can see a list of current players. Click “kick” to remove specific players from your campaign.

The Invitation URL allows you to invite players to your campaign. To the right of the URL is a button that copies the URL to your clipboard. Press “Refresh invitation code” to refresh the URL.

The last two buttons require special attention.  

The Lock this Session button locks or unlocks the campaign. When locked, only the DM can access the campaign. This feature is useful if you want to edit your maps and ensure none of your players start nosing around during your work.

Remove Session **PERMANENTLY** removes the campaign from the PlanarAlly server. All data will be unrecoverable. **USE WITH CAUTION!**

## Grid

![](./grid.png)

The grid settings provide the ability to tweak the settings of the grid or even disable the grid altogether. These settings are location specific!

Use grid enables or disables the grid.

Grid Size correlates to the size of the on-screen grid. 

Unit Size is the distance one grid represents in your game system. When you use the ruler tool to measure distances, you reference Unit Size.

Size Unit allows you to change the representation of units in ft (the dnd norm) to other units. This allows users to change from imperial to metric or allows users to measure by larger units, creating a world map measured by kilometers or miles. 

## Vision

![](./vision.png)

One of the most important settings are those for vision.  These settings require some special description and are also referenced often in the DM section on [lighting and vision](/docs/dm/light-shadows/).

### Fake Player
The first option _Fake Player_ is a DM toggle to render the board as if you were a player instead of the default DM mode.  You'll still have access to most of your DM tools, but the vision is calculated as if you were a player, so you can verify whether everything looks as it should.

As there are often multiple players you might be wondering which player is chosen.  As it turns out you can choose!  The vision tool (in the tool bar) allows you to select which of the players in the session you want to mimick.  This can be just one player, but can also be a group of players.

_Currently there is no keybinding to toggle this mode or visual cue for when you're in fake player mode.  This is one of the many things planned for a future version of PlanarAlly._

### Fill with FoW

When you play with vision you typically want to have areas on the screen that are hidden and areas that are visible.  With this option you decide what the default mode is. When toggled on everything on the screen is hidden for players by default and lights need to be added to grant vision to areas.

_FOW stands for Fog of War_

### Only LoS

This option toggles a more advanced mode of lighting whereby only things in Line of Sight (of player tokens) will be visible on screen.

By default, every location on screen with a light source will be visible, whether a player is in that location or not, with this setting active,
a player needs to see the light in order for it to show up on the screen.

See the lighting docs for more information on this topic.

### FoW Opacity

This simple setting allows you to choose what the opacity of the hidden areas is just for you. Players will always have this setting as 1.0 for themselves and can't edit this.

Do remember that in fake player mode you'll also be stuck on 1.0

### Vision Mode

_This is a technical option that I intend to remove in the next release of PlanarAlly._

Historically PlanarAlly calculated vision with bounding volume hierarchies or bvh for short.
Later on a different method was introduced based on triangulation. This was initially an optional experimantal mode you could select using this vision mode setting.

As time went on however the triangle mode became the default as it is much more potent.  The option to choose the older mode is still there for legacy reasons, but is not being maintained currently.

### Minimal/Maximal vision

These settings are additional tuning factors to the vision system and determine limits to the vision of all tokens.

Suppose there is one giant open field that stretches 5000 ft. and is completely illuminated. One could expect the entire area to be visible to your token standing in the middle of this field.  There are however limitations to the human (and to most non-human, for that matter) eye, hence the introduction of these settings.


Everything up to the minimum vision range can be seen as usual. Everything past the maximum range can not be seen and is fog of war.  Everything in between is shown in a diminishing opacity as you go further towards the edge of vision.
