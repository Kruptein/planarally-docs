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

Now pure numbers does not really say a lot, because some releases pack more content than others, so let's see what we actually achieved in the last year!

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

## Email migration

## User <> Character stuff

## Multishapes

## Server improvements

## Official server

## Email stuff

## Release numbers

## Competition

## Patreon

## Last Gameboard
