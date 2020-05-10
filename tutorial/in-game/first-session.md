# Creating your first session

This tutorial will mostly focus on how the DM can get started with creating immersive maps for their players, but players might pick up a thing or two as well.

In this tutorial we're going to cover:

-   Drawing shapes on the map
-   Bringing your assets to the map
-   Setting up lighting and vision (e.g. fog)
-   Interacting with tokens

## Adding assets to your board

When you create a new session, you'll be greeted with a blank map, so let's flavour it up with some drawings and assets!

A good session often requires some kind of map; For this excersise I generated a random dungeon using the [donjon dungeon generator](http://donjon.bin.sh/d20/dungeon/index.cgi).
If you uploaded it to the asset manager as described [earlier](/tutorial/out-of-game/asset-manager/), you should be able to drag the asset from the sidebar unto the map.

<video autoplay loop muted style="max-width: 625px;">
   <source src="./first-session/asset-on-map.webm" type="video/webm">
   <source src="./first-session/asset-on-map.mp4" type="video/mp4">
</video>

_Example of dropping an asset on the map_

## Fitting a map to the grid

Although our map is on the board, we're not done yet as it currently is not aligned to the grid. To rectify this we can either select the shape and use one of the corners to resize it manually or we can use the map tool to resize the asset.

Before doing this though, we should verify that the grid settings are to our liking! Open the DM settings and verify if the settings are correct. For the sake of this example we'll lower the size one grid cell takes on the screen as we're using a smaller screen.

To use the map tool we must decide what the area we're going to select (with the tool) should represent. In order to not get confused with the existing grid we can temporarily disable it using the DM settings again or we can temporarily move the asset to the token layer so that it is rendered on top of the grid. We'll use the latter here to show how to change the layer of an object.

<video autoplay loop muted style="max-width: 625px;">
   <source src="./first-session/fit-map.webm" type="video/webm">
   <source src="./first-session/fit-map.mp4" type="video/mp4">
</video>

_Fitting a map to the grid_

As you can see the end result is not 100% perfect yet, but it will take much less time to correctly adjust it from here onwards.

## Adding player and monster tokens

Next up; Bringing the dungeon to life. Adding player or monster tokens is exactly the same as adding a map, but this time we place the assets on the 'tokens' layer instead of the map layer.  

To keep yourself organised it is advised to structure your assets in a logical manner. You could create folders for each campaign you play, you could create a general token library with some subfolders based on either race or simply on starting letter. There is no mandatory structure so you can do what fits your workstyle best.  

You can then edit each individual asset either from a right click menu (select "Show Properties") or the box on the right that shows when the asset is selected.

## Let there be light

Currently everything is visible, which we typically don't want. So let us bring some shadow and lighting into the map. We'll first set up the location to have fog everywhere by default and then add a simple torch that sheds 20ft bright light and 20ft dim light to our character. As we are fullfilling the role of the DM, we can see everything even when there is fog. As a DM we can choose how much opacity the fog should have so that we can still see what lies ahead. As a player the fog will always be 100% opaque.

<video autoplay loop muted style="max-width: 625px;">
   <source src="./first-session/light.webm" type="video/webm">
   <source src="./first-session/light.mp4" type="video/mp4">
</video>

To make sure how a player in your session would see this, you can open the DM settings again and hit the 'Fake Player' button. This will drop most of your DM privileges and show you what players can see.

<video autoplay loop muted style="max-width: 625px;">
   <source src="./first-session/player-view.webm" type="video/webm">
   <source src="./first-session/player-view.mp4" type="video/mp4">
</video>

## Adding vision

As we can see in the last video, our players can currently not see the monster lurking in area 2, but can see straight through walls, not good!

Let's add some walls. To do this we have two options. We can draw walls on a "normal" layer (i.e. map or tokens) and then select the 'blocks vision' and 'blocks movement' checkboxes of the newly drawn shape's properties. Or we can draw on the special 'fow' layer which is a layer dedicated to vision.

From my own experience the latter option is always preferred, because it will automatically apply the two 'block' options I mentioned earlier and thus you don't need to dive into the shape properties for each wall you draw. Additionally it also lessens the clutter on your normal layers and is nicely tucked away in a dedicated vision layer.

Let's see what this looks like! I highly prefer using the polygon tool to draw walls as it's fast and snappy, but there is nothing preventing you from using a simple rectangle.

<video autoplay loop muted style="max-width: 625px;">
   <source src="./first-session/vision.webm" type="video/webm">
   <source src="./first-session/vision.mp4" type="video/mp4">
</video>

As you can see in the video above, as soon as we start to add walls, the torch light starts to get blocked!

_Because it is not super clear in the current UI currently, to finalize your drawing with the polygon tool you need to use **right click**_

If you want to add doors, you can use the exact same system and choose whether you want to select the 'blocks movement' option of the door. You can toggle this any time during the session to mimick a locked door being opened at any point.

_Don't worry about placing a point exactly, you can later move around any of the clicked points using the select tool!_

## Wrapping up

This should hopefully allow you to get started with creating some intersting _scenery_ for your players!

There is much more to explore! Lighting and vision have some extra secrets up their sleeve.
