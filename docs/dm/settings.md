# Campaign Settings

As the DM, you’ll have a special window of options. 
These allow you to configure the settings of the active campaign. 
You can access this window by clicking the gear icon in the top left corner and selecting “DM Options” from the dropdown menu.

## Admin

![](./settings.png)

The admin section provides administrative options.

### Players
In the players section, you can see a list of current players. 
Click “kick” to remove specific players from your campaign.

### Invitation URL
The Invitation URL allows you to invite players to your campaign. 
To the right of the URL is a button that copies the URL to your clipboard. 
Press “Refresh invitation code” to refresh the URL.

### Danger Zone
The last two buttons require special attention.  

### Lock Session
The Lock this Session button locks or unlocks the campaign. 
When locked, only the DM can access the campaign. 
This feature is useful if you want to edit your maps and ensure none of your players start nosing around during your work.

### Remove Session
Remove Session **PERMANENTLY** removes the campaign from the PlanarAlly server. All data will be unrecoverable. **USE WITH CAUTION!**

## Grid

![](./grid.png)

The grid settings provide the ability to tweak the settings of the grid or even disable the grid altogether. These settings are location specific!

### Use Grid
Use grid enables or disables the grid.

### Grid Size
Grid Size correlates to the size of the on-screen grid. 

### Size Unit
Size Unit allows you to change the representation of units in ft (the dnd norm) to other units. This allows users to change from imperial to metric or allows users to measure by larger units, creating a world map measured by kilometers or miles.

### Unit Size
Unit Size is the distance one grid represents in your game system. When you use the ruler tool to measure distances, you reference Unit Size.

## Vision

![](./vision.png)

Vision is one of the most important settings for the DM.
These settings allow you to change what players see and how they see it.
They are also referenced in the DM section on [lighting and vision](/docs/dm/light-shadows/).

### Fake Player
Fake Player is a DM toggle to render the board as if you were a player instead of the default DM mode.  
You'll still have access to some DM tools, but vision is calculated as if you were a player.
This way, you can verify what players will see.

If you have multiple players, you may choose which player you see the perspective of.
The vision tool (in the tool bar) allows you to select which of the players in the session you want to mimic.  
This can be just one player but can also be a group of players.

_Currently, there is no keybinding to toggle this mode or visual cue for when you're in fake player mode.  This is planned for a future version of PlanarAlly._

### Fill entire canvas with FoW

_FoW stands for Fog of War_

With this option enabled, everything on-screen is hidden for players by default. 
Lights need to be added to grant vision in areas.

With this option disabled, everything on-screen is shown to players by default. 
FoW needs to be added to remove vision in areas.


### Only LoS

This option toggles an advanced mode of lighting.
 
When disabled, every location on screen with a light source will be visible. 
It doesn’t matter whether a player is in that location or not. 

When enabled, only things in Line of Sight of player tokens will be visible on screen. 
A player needs to see the light in order for it to show up on the screen.

See the [lighting docs](/docs/dm/light-shadows/) for more information on this topic.

### FoW Opacity

This setting allows the DM to choose what the opacity of hidden areas is for the DM.
Players will always have this setting as 1.0 for themselves and cannot edit this.

In fake player mode, you'll also be stuck on 1.0.

### Vision Mode

_This is a technical option that I intend to remove in the next release of PlanarAlly._

Historically, PlanarAlly calculated vision with bounding volume hierarchies, or bvh for short.
Later, a different method was introduced based on triangulation. 
This was initially an optional, experimental mode you could select using this vision mode setting.

As time went on, however, the triangle mode became the default, as it is much more potent.  
The option to choose the older mode remains for legacy reasons. 
It’s not being maintained currently.

### Minimal/Maximal vision

These settings are more tuning factors to the vision system. 
They determine limits to the vision of all tokens.

Suppose there is one giant, open field that stretches 5000 ft. and is completely illuminated.
One could expect the entire area to be visible to your token standing in the middle of this field.
There are, however, limitations to the human and nonhuman eye, hence the introduction of these settings.

Everything up to the minimal vision range can be seen as usual. 
Everything past the maximal range cannot be seen and is fog of war.  
Everything in between is shown in a diminishing opacity as you go further towards the edge of vision.
