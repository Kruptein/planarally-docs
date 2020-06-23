# Locations

The Locations Tool provides multiple instances of a set of [layers](/docs/dm/layers/) with their own settings, each instance hereinafter referred to as a *Location*.

## The Location Bar
Only the DM can actively access and manipulate Locations.
This is done by clicking on the <font-awesome :icon="['far', 'compass'"/> symbol at the upper left corner of the screen.
As this is 'DMs-only' function, players cannot see this button.
Players only interact with one canvas at a time; for them, each new Location looks like a different map (i.e. a different set of stacked [layers](/docs/dm/layers/)).

Once opened, the Location Bar shows a button to create new Locations on the Left, followed by items for each of the Campaign's locations.
The current location is highlighted by white text and <font-awesome :icon="['fas', 'cog']"/>, while every other location's text and buttons are white with a reddish hue.
Each item of the list consists of a handle to drag locations, a display of the location's name, and a <font-awesome :icon"['fas', 'cog']"/> button to access the location's individual settings.

Each location with players present at the location, also displays a tab reading "Players" that can be expanded to show a list of the individual players present on said location.

Clicking the <font-awesome :icon="['far', 'compass']"/> symbol again will close the Location Bar.

## Create and Reorder Location
Clicking on the "+" button on the left of the Location Bar will open a dialogue asking you for a name of that Location.
This name can be edited later.

Clicking and holding on the 'nine-dots'-symbol allows to reorder Locations freely on the bar, as shown in the video:

<video autoplay loop muted style="max-width: 750px;">
   <source src="/assets/0.20.0/location-rearrange.webm" type="video/webm">
   <source src="/assets/0.20.0/location-rearrange.mp4" type="video/mp4">
</video>

## Location Settings
A newly created Location inherits the Campaign Default settings that are defined in the [settings](/docs/dm/settings/).
Some of the settings defined there can be overridden for each session, individually.

The Location Settings can be accessed by the <font-awesome :icon="['fas', 'cog']"/> symbol on the respective Location's item in the Location Bar.
Location Settings will open a dialogue with three tabs: Admin, Grid, and Vision.

Every setting that was set to override the Campaign Defaults will stay that way until reset.
Manually defining a setting to match the value also set in the Campaign Defaults will not re-establish the link to the defaults but instead keep this value despite any further change in the Campaign Defatlts.

<video autoplay loop muted style="max-width: 750px;">
   <source src="/assets/0.20.0/settings.webm" type="video/webm">
   <source src="/assets/0.20.0/settings.mp4" type="video/mp4">
</video>

### Admin
The *Admin* tab in the Location Settings allows you to rename or remove the location.

![](/blog/2020-05-10-release-0.20.0/rename-location.png)

### Grid
For the individual settings, see ['Grid' in the Campaign Settings](/docs/dm/settings/#grid).
Note that you cannot change the colour in which the grid is drawn. 

### Vision
For the individual settings, see ['Vision' in the Campaign Settings](/docs/dm/settings/#vision).

## Change Locations
With the Location Bar opened, the DM can change the location as easy as clicking on the block displaying the name of the desired location.

Players cannot change the location on their own.
Upon invitation, Players will join an existing location that is occupied by a player (whether or not this player is logged-in at that time).
If there are no other players listed in the campaign, the first player to follow an invitation will join the location the DM is active at.
Players will stay at their active location until dragged to another location by the DM.

Players can be dragged as a group, or individually, as shown here.

<video autoplay loop muted style="max-width: 750px;">
   <source src="/assets/0.20.0/location-move.webm" type="video/webm">
   <source src="/assets/0.20.0/location-move.mp4" type="video/mp4">
</video>

Players that are sent to another location do *not* take any of the shapes they control with them.
Instead, those shapes have to be sent to that location by the DM.

Shapes (including player-controleld Tokens) are moved individually or as a group via their context-menu.
When sent to another location, shapes will appear centered on the spawn location, which is a special shape that appears on the *dm*-[layer](/docs/dm/layers/#dm).

![Spawn Location Designator](spawn.png)

The spawn location designator can be moved freely on the *dm*-layer.
Currently, there is only one spawn location designator per location.
It is planned to eventually support more, though.

## Delete Locations
You can delete a Location under the *Admin* tab within the Location Settings.
You can only delete Locations where nobody, neither players nor DM, is present. 
