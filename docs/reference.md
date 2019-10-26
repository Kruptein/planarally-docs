# Quick Reference

## Default Layers

For more info on layers check the [layer documentation](/docs/dm/layers/).

Name | player visible | player editable | short description
--- | --- | --- | ---
Map | Yes | No | layer under the grid typically used for map assets
Grid | Yes | No | not selectable by the DM either, but can be configured in the session settings
Tokens | Yes | Yes | the main game board
DM | No | No | A place for the DM to place objects hidden to players
Vision | Yes | No | All shapes here are invisible on other layers

## Keybindings

| Key/Modifier | Context | Action
| --- | --- | ---
| Arrow-keys | empty selection | move the board 1 grid cell in the pressed direction
| | selection | move the selected shapes 1 grid cell in the pressed direction
| Shift | selection | move shapes through movement blocking terrain (DM only)
| Ctrl | | Extend active selection with ctrl-selected shapes
| Del | selection | Delete all shapes in the active selection
| d | selection | Deselect all currently selected shapes
| Ctrl + u | | Toggle UI