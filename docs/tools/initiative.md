# Initiative Tracker

The Initiative Tool is a moveable pop-up window that allows you to track the initiative order of various objects (normally tokens).

## Access

The Initiative Tool is not accessible via the toolbar on the lower right of the user interface.
Instead, it is accessed via context-menus.
By right-clicking anywhere on the map, you can always choose to `Show Initiative` in the context-menu, activating the tool.
Also, the context-menu of objects (shapes, assets or tokens) shows the `Show Initiative` option, if the object is already entered into the initiative list.
If the object in question is not (yet) listed in the initiative list, the context-menu will show `Add Initiative` (`Add all to Initiative`, if multiple objects are selected), opening the Initiative Tool and entering the object into the list, at the same time.

The Initiative Tool opens a moveable pop-up window that can be closed by clicking on the `x` in the above-right corner.

It contains the initiative list that can contain several individual entries and, below, a bar with several functions.

## Initiative List

The Initiative List is, in essence, a table with six columns and a row for every object that is added to the Initiative List.
The *active* row/entry is highlighted by a green background, indicating that it's this object's turn.

Hovering over an entry will highlight the associated object on the map with a red rectangle around it.
This is particularly useful if there are several objects on the map illustrated with the same asset (i.e. similar monsters etc.).

### Designator

At the most left of each row, there is the designator of the object added to initiative.
If the object is an asset, the designator will be a miniaturised version of the asset.
If the object is a Basic Token, the designator will be the text shown on the token.
If the object is another shape, the designator will be the object's name as entered in the properties when the object is added to initiative.

### Initiative Value & Sorting

The designator is followed by the initiative value, which can be any number.
Players can only modify the initiative value of objects they are granted access to.
The DM can modify the initiative value of all objects in the list.

The entries will be automatically sorted by this value, putting the highest values at the top and the lowest values at the bottom of the list.
Hovering an entry will highlight it with a border showing a notch on the lower right corner.
Any item can be dragged by clicking and holding on this notch, superseding the automatic sort.

### Timed Effects

The next column shows a clock, followed by a number (default 0).
This column shows how many Timed Effects (see below) are assigned to the object.
This function can be used to easily track buffs and/or effects (e.g. spells) dealing damage over time.

Timed Effects are free-form entries that are assigned to an entry into the Initiative list that are valid only for a limited time, i.e. rounds.
Left-clicking on the clock-icon will add a new Timed Effect associated with the respective entry.
Hovering over an entry will expand the list of Timed Effects below, connected to the highlighting border.
The list of Timed Effects of the active entry is always expanded.

Timed Effects can be added at any time.
The DM can add Effects to any entry, Players only to entries they have been granted access to.

Each Timed Effect has two values, the descriptor and the duration.
The descriptor is shown on the left (default on creation: `New Effect`) and can be any text.
The duration is shown on the right (default: `10`) and should be a number and describes the duration of the effect in upcoming rounds.
Any time an entry gets to be *active*, the duration decreases by one, until reaching `0`.
After the duration has reached `0`, the next time the entry gets to be active, instead of changing from `0` to `-1`, the Timed Effect vanishes.

### Visibility

The next column shows an eye that toggles visibility of the entry.
If the eye is grey, an object is invisible, i.e. only the DM can see the respective row.
A Player-added object will be visible by default, while objects added to initiative by the DM are invisible by default.

### Group Initiative

The second to the right column shows an icon depicting three persons.
Clicking the icon toggles individual/group initiative.

When an entry is marked as *group initiative*, it cannot be deleted either by clicking the delete symbol (see below) or removing the associated object.
It will still highlight the associated token on mouseover; at this moment, there is no functionality to highlight multiple objects at once.

### Delete

The most right column, depicting a trashbin, is to delete the entry from the list.
The DM can delete any entry from the initiative list.
Players can only delete entries they are granted access to.

Deleting a token that is added to initiative, or moving it to another location, will also delete the associated entry in the Initiative Tool.

Entries that are added to Group Initiative (see above) cannot be deleted.

## Functions Bar

The functions bar is a single row containing the `Round`-indicator showing the current round of action/combat on the left, and four buttons to the right of these indicator.

The eye toggles vision auto-lock.
*(further documentation needed)*

The camera toggles camera auto-lock.
When camera auto-lock is active, every time action is assigned to another object (see below), the viewport is centered on the now active object.
This can be toggled on/off individually by each player.
Camera auto-lock will only center the viewport on objects the players are able to control.
Thus, for the DM, the center of the viewport will change virtually with every click on *Next*.
The Players' viewport will only change when a token they control is now active according to the Initiative Tracker.

The two arrows forming a circle resets rounds and turns.
Rounds will be reset to Round 0, action will be assigned to the object at the top of the list.
Note that neither the initiative values nor Timed Effects are reset.
This function is only available for DMs.

The arrowhead pointing to the right (*Next*) assigns the next player in the initiative order as *active* (see above).
This function is only available for DMs.
