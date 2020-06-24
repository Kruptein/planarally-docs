# Layers

PlanarAlly orders its game board in multiple layers that are drawn on top of eachother in order to produce the end result that you see when you are playing.

These layers each have a dedicated use case, so as a DM you should be aware of what each layer's purpose is. For a quick reference on each layer you can check the [quick reference](/docs/reference/) document, for more details continue on reading!

With the exception of the DM layer, all layers are also drawn on the players' boards, but they can only interact with elements on the tokens layer.

_Currently these layers are hardcoded, but I do foresee a possiblity to tweak this to your own preference in the future._

## Map

At the bottom of the draw stack is the map layer. As the name suggests this layer is ideal for placing assets that relate to maps, building layouts etc.

The reason why is because it is drawn below the grid layer and thus allows you to align your gridlines to your various dungeons. Otherwise this layer behaves the same as the tokens layer.

## Grid

This layer cannot be manually selected, but it can be configured using the DM settings (on the grid tab). It does what it says on the tin and draws gridlines on the screen.

Currently hexagonal grids are not supported. This is on my todo list, but don't expect it immediately.

## Tokens

The core gameplay will happen on this layer as it is the place where the main actors move around. There is nothing special in particular going on here, but you'll often have this layer active.

## DM

This layer is specifically designed to only be accessible to the DM, players will not receive any of the information that is available on this layer and thus this can be used to preplan certain encounters or place some text labels to remember.

This in combination with the ability to change the layer of a shape, is a common setup in my own games to make sure players don't spoil something because they're moving around too quickly.

## Vision

Currently still titled as the FOW layer in-game, this layer has some special behaviour that is meant to ease you with vision.

When you're drawing your walls these often are static and not meant to change. By drawing these on the vision layer, you make sure that later on when interacting with the tokens layer, you don't accidentally move a wall all of a sudden.

With the above in mind, this layer performs two magic tricks automatically for you.

As most shapes you draw on this layer will be used for walls or doors, shapes drawn on this layer are automatically drawn with the 'blocks movement' and 'blocks vision' settings applied. You can still deselect these options if you don't need them but just know that they'll be applied by default on this layer.

**Everything** drawn on this layer is invisible on other layers. This is done with the idea that typically your map will already have walls predrawn, so when you draw an ugly black rectangle to tell the lighting system about a wall, you don't want to have to see that ugly blob when you're on the tokens layer.

Just to reiterate this layer is purely for convenience. If you don't like the automatic settings or the invisible aspect, you can just use the tokens layer and draw your walls there with any setting you desire.
