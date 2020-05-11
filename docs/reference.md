# Quick Reference

## Default Layers

For more info on layers check the [layer documentation](/docs/dm/layers/).

| Name   | player visible | player editable | short description                                                              |
| ------ | -------------- | --------------- | ------------------------------------------------------------------------------ |
| Map    | Yes            | No              | Layer under the grid typically used for map assets                             |
| Grid   | Yes            | No              | Not selectable by the DM either, but can be configured in the session settings |
| Tokens | Yes            | Yes             | The main game board                                                            |
| DM     | No             | No              | A place for the DM to place objects hidden to players                          |
| Vision | Yes            | No              | All shapes here are invisible on other layers                                  |

## Keybindings

| Key/Modifier        | Context         | Action                                                                       |
| ------------------- | --------------- | ---------------------------------------------------------------------------- |
| Arrow-keys          | empty selection | Move the board 1 grid cell in the pressed direction                          |
|                     | selection       | Move the selected shapes 1 grid cell in the pressed direction                |
| Space               |                 | Center screen on next token (cycles through owned tokens)                    |
| Shift               | selection       | Move shapes through movement blocking terrain (DM only)                      |
| Ctrl                | selection       | Extend active selection with ctrl-selected shapes                            |
|                     | resize          | Retain aspect ratio                                                          |
| Alt                 |                 | Disable snapping behaviour (both grid snapping and nearby point snapping) \* |
| Del                 | selection       | Delete all shapes in the active selection                                    |
| d                   | selection       | Deselect all currently selected shapes                                       |
| Ctrl + u            |                 | Toggle UI                                                                    |
| middle mouse click  |                 | Pan the screen                                                               |
| middle mouse scroll |                 | Zoom in relation to the current mouse pointer.                               |

-   This can be inverted in the client settings
