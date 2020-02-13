---
title: Introducing floors & small updates
date: 2020-02-13 21:02:34
excerpt: "An introduction on a new upcoming feature: floors! And a small overview of some other things going on in the 0.19.0 release."
author: [darraghvt]
---

I have no set release day in mind for the 0.19.0 release, but I'm aiming to at least get something out this month. In the meanwhile I wanted to already touch om some changes that you should expect in the 0.19.0 release and show a more detailed look on one new feature in particular.

## 0.19.0 goodies

To start of we finally have some use for the settings button that has been visible in the main dashboard where you can select which session to join.
It now has a purpose, and it shows some very simple account settings. You can set an email address, change your password and delete your account.
Note that currently there is nothing done with the email address, but a server owner could use it for sending out maintenance information or something else.

I hope to extend the settings in the future with plenty of other things like default configurations for all in-game related settings.

Another thing coming in the next release is snapping during draw and resize actions. Although the polygon tool already provided much needed simplicity in the drawing aspect (and in particular fow drawing) it had the cumbersome downside that there was no way to attach exactly on other points, often introducing small gaps in vision around doors and walls.
I can now gladly say that those days are over and now you can snap polygon (and other shapes') points freely!

Lastly a small note on a feature contributed by LDeeJay1969; He introduced a keybinding (ctrl+0) to reset the viewport to (0, 0) in case you somehow get lost in the infinite void.
More work in regards to jumping around the map is on the way, but this small addition is already a nice push to avoid frustration!

## Floors

Now onto a feature with a more visual bigger impact: floors!

<video src="/assets/0.19.0/floors.webm" type="video/webm" style="max-width: 75vh;" autoplay loop></video>

As can be seen in the video above, work is being done on the ability to define multiple floors which are rendered on top of eachother.

Adding floors adds a much deeper immersion compared to jumping around locations or having to pan around the map.
Each floor does add increased load on the client as the floors below the active floor also have to be rendered!
Just to make sure: this system is entirely optional (i.e. the default is just 1 floor).

As can be seen lighting and vision are taken into account to show what a certain player can see. Some simplifactions/assumptions have to be made as PA is no 3D game but instead a multitude of 2D layers on top of eachother, but in general lighting on higher and lower floors is taken into account when rendering.
