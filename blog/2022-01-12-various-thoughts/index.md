---
title: Looking back on 2021 and ahead!
date: 2022-01-12 20:00:00
excerpt: "An update on PA progress and plans for the future"
author: [darraghvt]
---

## Introduction

Hey everyone, Darragh here to checkin and give some random thoughts, ideas and ramblings on PA.

I don't often do these blog posts that are not just release notes,
simply because I don't often know what to talk about and I'm generally not great at writing coherent thoughts.
The last releases have been relatively small and slower though, so I wanted to take the time to show that it's not dead!

## 2021 Releases

The pace of PA releases has always ebbed and flowed due to various factors in my life affecting my productivity so looking back it's not that abnormal to see a slower release schedule in the last couple of months.

Looking at my blog posts, we had 6 releases last year, 3 which were in the first 3 months, 2 in the summer and then another one in October. If I look at the 2020 releases that's actually an increase from 5 to 6!

Now pure numbers do not really say a lot, because some releases pack more content than others, so let's see what we actually achieved in the last year!

_I'm just going to discuss noticeable things, or things that I would like to say something about, we did more than only this!_

### Hexagons

_Added in 0.24_

Support for hexagons was added at the start of the year.
It's a pretty simple change and not much has been done with hexagons since then, which is kind of a shame on my end as they're still pretty much a secondary citizen as things like snapping are not yet working for these grids.

It's one of those things that I personally never use, so never get bothered by it, and don't really hear any complaints about either, so I don't know how wildly used hexagons are in general. If you're someone who is using hexagons often and lack some features in this regard, speak up!

### Group logic improvements

_Improved in 0.24_

Groups were already longer a concept in PA, but the 0.24 release upped the useability quite a bit.
This is a feature I actually use a lot myself and one that I think is in a fairly good position right now. So pretty happy with that!

### Variants

_Added in 0.24 & 0.29_

Variants or sometimes called 'Composite Shapes' were added as an experimental feature and very much still are experimental. They even were disabled for a short period after a big migration, as I thought nobody used them, but I was wrong, so sorry for that!

This feature has some fun potential, I have one player that uses it to modify their eladrin's colour palette, but it has much more uses than just that.

It's functional, but still a bit rough around the edges in some areas, so hopefully I find some time to clean this up a bit.

This shape adds a bunch of complexity due to it being a collection of shapes that are linked together, something that we'll go further into in a later section again, but this is also the reason why I'm often hesitant to touch it as it's very prone to errors.

### Initiative

_Modified in 0.24 & 0.27_

The initiative tool is one I use a lot for obvious reasons.
It used to be riddled with some synchronization issues and other UI shenanigans, so I was happy to see a first batch of issues being fixed in 0.24.

It was release 0.27 however that improved the initiative tool for good and I haven't had any big problems with it since this release. It saw a UI rework as well, with more features to empower the DM for other scenarios.

### Asset import/export

_Added in 0.24_

Early in the year we also saw support for importing/exporting assets being added to the asset manager.

This is one of those features that are also pretty basic at the moment. They kinda do what they're supposed to do, but a lot of things can be improved here.

### Tracker & Aura improvements

_Modified in 0.25 + 0.26_

Another change that I'm really happy with how it turned out are the changes to trackers and auras. The UI is now much cleaner and explains things better instead of just being a bit able basically.

I also have had a lot of fun with the angled auras that are now possible even though they are pretty much a gimmick for standard dungeons and dragons :D

Later in 0.26 Scoodle was so gracious to add visual bars for trackers to track things like HP or whatever you like. It's something that my players have started to use a lot and generally seems to be well received in my own play circles.

### Undo/Redo

_Added in 0.25_

Something that was missing for a long time in PA was undo capabilities.
Messed something up, you're out of luck.

Thankfully some form of undo/redo was added for the big actions like moving shapes or removing things.
It's one of the things that I often forget did not yet exist before last year, but can save some small frustration moments from time to time, which is a pleasant thing to have.

By no means is every action undo-able at the moment and that was a conscious decision to get it out there as soon as possible for big operations. If there are some things that you wish were part of the undo/redo system, let me know!

### Spell tool

_Added in 0.25_

When casting spells in games like D&D, we often can benefit from some visual aid to see what would hit or not hit. In theory we could already accompish this with the draw tool, but that requires some effort and wastes precious time at the table, which is the reason the spell tool was added.

I'm a bit conflicted about the current state of the spell tool, I have players that use it frequently, but there are some small bugs that still seem to be in there which can take away from the entire purpose of saving time. So I hope to find some time to address these this year!

### UI redesigns

_Modified in 0.26_

A BIG change was the UI for everything that wasn't the core game or the asset manager. The login screen, user settings and game selection were all redesigned in a uniform style to get rid of the old and very simple UI we used to have.
Writing this I almost couldn't remember how it used to look!

This is a change that I love personally, one one hand because it was well overdue and on the other because I generally suck with design stuff and I think I did an OK job here.

Being able to add a campaign icon was also a small but nice touch to enrich the pages a bit while you're clicking around.

Sadly I also hoped to tackle the asset manager and even integrate it in the main view, but never found the time to do this.

Another UI change was that of the client settings, which now also uses the classic panel-modal view that you're used to from editing shapes etc.

### External wall information

_Added in 0.26 & 0.29_

Manually drawing all walls is something that not everyone likes, which is why 0.26 added support for svg files and dungeondraft files to provide the information on where walls are.

This is something that I personally don't use, I'm quite adapt at drawing walls just by doing it a lot and there are some downsides to using svg files that I don't personally like.

That said, it's more power to people to spend time on other things which is always great.

### The big red border

A random thing to mention maybe, but the red border to show that connection to the server has been lost, is something that is something that I appreciate a lot, but that might just be because I sometimes break things in my local setup and a visual clue helps a lot then :D

Another reason I wanted to highlight this, is that I want to improve it a bit to make sure that if it remains disconnected for X time a bigger message/modal/something should appear in the center of the screen to make sure that the current user notices that something is wrong. I've heard some people lose some work because they didn't notice the red border, so the subtlety is not for everony.

### Loading animation

A good friend of mine and one of my players, made the lovely new loading animation that goes through the various dX dice and I just love it :)

### Asset sync

Another smaller improvement that I appreciate, is that the asset listing in the sidebar (in game) now is actively updated if you change things in the asset manager. In the past I often had to refresh the page for something small, which is just not fun.

### Draw tool improvements

_Modified in 0.28 & 0.29_

The draw tool hides the OS mouse cursor to smoothen things visually.
This however made it difficult to find the PA cursor sometimes as it was a single colour and could thus blend in with the background in some cases.

A first improvement came in 0.28 which added a border colour to the PA cursor to distinguish it from its content.

It wasn't until 0.29 that I actually think the root problems people had were gone. This release added a mouse-like object that follows the PA cursor, mimicking a OS cursor, but retaining the smoothness by coupling it to the same draw loop as the rest of the game.

### Dice

_Added in 0.29_

A big feature was adding dice rolling to PA.
This ultimately landed in 0.29, allowing people to roll virtual dice with the classic dX setup.

Dice landed in a non-polished version and haven't been cleaned up since, so this is a big area that could definitely use improvements for various reasons.

The foremost thing I would like to cleanup is the UI for the dice tool itself.
That said the rolling behaviour can benefit from some improvements as well, as well as support for other dice formats out there for other RPGs.

Another aspect that I've not covered yet is non-visual dice. Sometimes people just want to quickly get a result for 20d20 + 5d4 + 2 without having to wait for some fancy dice to roll around.

Another place where I would like to introduce dice concepts is in the templates, allowing you to make a goblin template with instead of a fixed HP pool, a formula (2d6) which autoresolves upon joining the battlefield.

So hopefully I find time to cover dice improvements as a big topic in the coming year!

### Polygon edit

_Added in 0.29_

Another feature that I finally got around to tackle was modification of polygons.
I use polygons so much that I don't know why I didn't tackle this earlier.

Adding or removing points, splitting or joining polygons, it's all possible now!

## Ramblings on various topics

After looking back on 2021, I wanted to take the time to discuss some random things.

Some of these topics are technical, some are very speculative and by no means hardcoded plans.

Some of these topics I'm not sure yet on how to continue or to start and I would love to hear input from you, my community on some of these topics!

### Releases

#### Release cadence

One thing that I would like to know your input on is the release cadence.

So far I would say that I roughly try to release when I feel the release has enough content. Sometimes this can mean a rapid succession of releases like we saw in the first months of last year, sometimes this can mean that a release waits for a couple of months.

Is this something that you are fine with?, or would you rather that I move it to a faster cadence that even If I don't have a lot (e.g. a small improvement/addition and some bug fixes), I should still put out a release say once a month.

#### Versioning scheme

Another topic I wanted to discuss was release numbers.
PA is part of the [ZeroVer club](https://0ver.org) with the latest release being 0.29.0 after almost 4 years!.

That's simply because I don't really know what would be needed to go to a 1.0 for me. It would need to be something substantial given that I never went to 1.0 in the past for other big changes, which means that it will likely not happen soon by that account.

Which means that I might reconsider the versioning scheme to use something different.
The main two options I would consider at the moment are described below.

##### Drop the major

Doing something similar to firefox and just drop the first 0. This leaves us with a big number that shows iteration and an extra number for potential patches. (e.g. 29.0 instead of 0.29.0)

This solution is pretty easy and doesn't really change anything in practice.

##### Year releases

Another option is to do something like "November 2021" or "2021.1, 2021.2, ...", where in the latter case the 1/2 can either just be an indication of iteration or actually relate to the month it was released in.

We would still keep track of some other version number (probably the other suggestion above) but the general communication would be done by year and iteration.

The main benefit of this in my opinion is that it makes communication easier.
I'm quicker to remember whether a certain thing was part of the 2021 release cycle compared to being part of 0.24.0 and newer.

Given that I don't tend to release more than once a month anyway, this could be an option.

### Server

#### Asset Limitations

An important thing that I've never come around to implement are server configurations to limit certain asset related settings.

There currently is no limit on how many assets someone can upload, nor is there a limit on how big said files are.

These are 2 things that I would like to address rather sooner than later.

#### Email

Another aspect that is not yet covered is all things email related.
There currently is no mechanism to reset passwords for players outside of contacting the server admin.
The main reason is because there is no email system configured.

This is a topic that I'll have to research a bit,
but I expect this to result in some new settings being added to the configuration file to configure email servers by the server admin.

Along with the technical aspect of adding email support, this also means adding welcome emails and password reset emails along with other things.

#### Official server

I would love to be able to host some official PA server myself as well.
I'm very happy and glad that other people are hosting public servers out there,
but I feel that some official server wouldn't hurt either.

In fact https://app.planarally.io has been up and running for a while now, but this is currently a **development** server and is thus not advised to actually play with.

### Client

#### Email migration

Another change I would like to make is related to the email topic in the server section and that is to change the login process from a username/password combination to an email-address/password combination.

One reason for this is that it will make my life way easier to import save files from another server. Specifically related to users as I currently have no way to match a username from one server with one from another. There might be a 'tom' on both, but it might actually be two different people. If I do this for emails, combined with a verified email address, this is one less hurdle to overcome.

This would make email addresses mandatory which is something that wasn't the case in the past, and the prime reason why I chose a username login initially was to support offline play.
Does this mean I'm removing offline play? No, not at all. Offline play is and will always be a big feature of PA and this just means that email validation and other email related things will just not be relevant. The emailadress will basically act as a regular username.

#### User vs Player

Another change I would like to do is to give more power to players.
Currently the DM basically handles everything, they have to upload the character art etc.

A first change is to bring a clearer distinction to the concept of a User and a Player.
A user will be identified by an email (if my above plans go ahead) and can be a player in multiple campaigns where they'll be identified by one or more character names.

Later on it should be possible to attach specific assets to a character giving the player more power to do things like upload their own art etc.

#### Multishapes

A completely different topic and more of a tangent than anything else is the concept of multishapes.
Multiple basic shapes that are linked together to form one bigger shape.

The foremost reason this is a topic I'm sometimes playing with is to accomodate things like moving the map and moving along all walls associated with the map.
Or other shapes that have some connection to a shape on another layer. This is however a topic that is technically more challenging as seen by my experiments with the variants.

Variants can be regarded as a subclass of the multishapes topic, where multiple shapes are related to eachother, but only one is shown at any time.
Additionally for variants the shapes are all located on the same layer so it's also simpler in that regard.

I don't really know where I'm going with this section, it's just something I've been musing about :)

### PA in the VTT landscape

This last section of ramblings is related to some more high level topics related to PlanarAlly.

#### Competition

PA grew from a desire to try to create a VTT for my own campaigns and wasn't made with an original intent to be something big.
I didn't see any reason why I wouldn't make the code itself public, and one thing lead to another and I have a small but fun community around this project!

Something that I'm very much not paying attention to as a result is the "competition" and I use this word loosely here as the other projects out there probably aren't even aware of PlanarAlly to begin with.

But other VTTs exist out there, your big ones, but also the smaller ones, which are popping out everywhere these days just as PA did.
So sometimes I feel a bit intimidated, as if I'm fighting an uphill battle that I will inevitably lose.
But I've made my peace with just accepting that even if a certain point in time comes where another platform is vastly superior and my playerbase moves on,
I can say that it was a fun experiment and I shouldn't feel sad.

#### Patreon

Somewhat related to the last point is that I'm very grateful to the people that actually donate some money on patreon.
I don't really post things on patreon or have tiers or whatever, because I have no idea what I could use them for.
Because the community is rather small I like to just tell everyone if something new is coming up.

Maybe there is no need to do anything with it and just let it be as it is right now,
bug if anyone has some ideas to improve my involvement in the patreon page, let me know!

#### Last Gameboard

A last thing I wanted to mention was the 'Last Gameboard' a product/company that I've been interacting with last year.
It's a cool project that I've been integrating PA on and is also a reason why PA itself was a bit slower in the second half of last year.
The product should launch somewhere this year, so we'll see how it goes and in which way PA on the device will be well received.

That said most development I do for that integration has also found its way back into the main codebase so that's cool.

## Closing thoughts

That wraps up my ramblings, if you managed to read all the way to the bottom, thank you for your patience :)

I never expected to have this project evolve to what it is nowadays and I can't thank all of you enough for that, so let's see what 2022 brings us!
