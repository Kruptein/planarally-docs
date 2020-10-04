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

### Movement

A decent chunk of keybindings is dedicated to moving either shapes or the screen around.

| Key/Modifier               | Context         | Action                                                        |
| -------------------------- | --------------- | ------------------------------------------------------------- |
| Arrow-keys                 | empty selection | Move the board 1 grid cell in the pressed direction           |
|                            | selection       | Move the selected shapes 1 grid cell in the pressed direction |
| Space                      |                 | Center screen on next token (cycles through owned tokens)     |
| Shift                      | selection       | Move shapes through movement blocking terrain (DM only)       |
| Ctrl + 0                   |                 | Focus origin (0,0) of the grid                                |
| middle mouse click (hold)  |                 | Pan the screen                                                |
| middle mouse scroll        |                 | Zoom in relation to the current mouse pointer.                |
| Page up/down               |                 | Move camera floor up/down                                     |
| Page up/down + alt         | selection       | Move selection floor up/down                                  |
| Page up/down + shift + alt | selection       | Move selection + camera floor up/down                         |

### Behaviour

| Key/Modifier | Context | Action                                                                       |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| Tab          |         | Toggle Modes (Build/Play)                                                    |
| Alt (hold)   |         | Disable snapping behaviour (both grid snapping and nearby point snapping) \* |
| Ctrl + u     |         | Toggle UI                                                                    |

\* This can be inverted in the [client settings](/docs/player/settings/)

### Selection / Shape interactions

| Key/Modifier   | Context   | Action                                            |
| -------------- | --------- | ------------------------------------------------- |
| Ctrl           | selection | Extend active selection with ctrl-selected shapes |
|                | resize    | Retain aspect ratio                               |
| Del, Backspace | selection | Delete all shapes in the active selection         |
| d              | selection | Deselect all currently selected shapes            |
| Ctrl + l       | selection | Lock selected shape(s)                            |
| Ctrl + c       | selection | Copy selection to clipboard                       |
| Ctrl + v       |           | Paste clipboard to board                          |
