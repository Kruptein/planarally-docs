# Dashboard

After a successful login, the dashboard will be shown.
It consists of a navigation bar on the left and a content section on the right.

![Dashboard](./assets/dashboard.png "Dashboard")

## Game

The _Game_ section offers you to play, run, and create games.

### Play

Clicking _Play_ will open a list of all campaigns that you did not create, but are a player in.
_(Even if the creator of a campaign granted you DM status via the [campaign settings](/docs/dm/settings/#players), you will still find this campaign in the Play list, not the Run list.)_

The list will show the campaigns with their name next to the campaign's logo.
Clicking on a campaign's entry will transform its logo into a play symbol and show further information on this campaign in a campaign details bar to the right.
You may now jump into the campaign, clicking on the play symbol in the list or through the `Launch!` button at the bottom of the campaign details bar, both bringing you ultimately to the [game board](/docs/player/gameboard).

To the right, a campaign details bar is displayed, showing information on the selected campaign.
On top, the campaign's logo is shown, followed by the campaign's name and the username of the campaign's creator.

Below that, the `Launch!` button will bring you to the game board.

Below the lauch button, the `Last playtime` indicator will display the date of the last time _you_ accessed the campaign.

A simple `Notes` input follows.
The notes entered here are _personal_ to your account.

At the bottom, the `Leave` button offers you to permanently leave the campaign.
A DM's invitation link will be necessary to re-join.

### Run

Clicking _Run_ will open a list of all campaigns that you created, regardless of whether you still have DM status within the game, or not.

This will display just as described above under [Run](#run), with the following differences:

-   the campaign's logo is editable by clicking on the display at the top of the campaign details bar,
-   the campaign's name is editable by clicking the edit <font-awesome icon="pencil-alt"/> symbol next to it,
-   instead of leaving, you can _delete_ the campaign – for all players!

### Create

Creating a campaign is easy: Enter a name and click `Go`.
You can also choose a logo for the campaign by clicking on the default logo displayed next to the name input.

:::info Logo upload
The logo has to be uploaded as an [asset](/docs/dm/assets).
:::

## Assets

The **Assets** section offers you to manage or create [assets](/docs/dm/assets/).

### Manage

This link will bring you to the [asset manager](/docs/dm/assets).

:::info Incomplete feature integration
The asset manager is not yet fully integrated into the dashboard.
Expect full functionality, but different look-and-feel.
:::

### Create

:::warning Incomplete feature!
This feature has not been made yet, the link in the navigation bar is just a placeholder.
:::

## Settings

Clicking on _Settings_ will change the options listed in the navigation bar as well as provide a option to return to the normal navigation.

Currently only 1 setting section exists: _Account_.

### Account

The account settings will display your username.
Currently, there is no possibility to change your username other than directly manipulating the database.
This is limited to the server's admin and discouraged in general.

You can, however, modify your email-address.

:::tip Optional Feature
Registering email-addresses to your account is a completely optional feature.
_No_ feature of PlanarAlly relies on emails in any way at this moment in time.
However, entering an email-address might ease communication with the server's admin/hoster.

Emails are likely to become mandatory in the future though.
:::

### Danger Zone

The _danger zone_ offers to change your password or delete your account.

:::warning Final Decision!
These actions are irrevocable!

PlanarAlly does _not_ use soft deletion, so recovering your account is not possible once deleted.
:::

## Localisation

In the top-left corner of the navigation bar lies the localisation button which lets you choose a localisation of PlanarAlly using a drow-down menu.
Any choice you make, here, will replicate to every campaign you play or run.

:::info Translation Fallback
Note that translations _may_ be incomplete.
In case a translation of something in the user-interface is missing, the interface will fall back to the english translation for this specific element.
:::

At the moment, PlanarAlly supports the following languages (at least to a certain extent):

-   English (en)
-   简体中文 (Simplified Chinese, zh_CN)
-   Deutsch (German, de)
-   Русский (Russian, ru)
-   Danks (Danish, dk)
-   Español (Spanish, es)
-   繁體中文 (Traditional Chinese, zh_TW)
-   Italiano (Italian, it)

:::tip Help translate!
In case you're encounter translation errors, missing strings or a localisation to your language, feel invited to help out!
See [the contribution guidelines on github](https://github.com/Kruptein/PlanarAlly/blob/dev/CONTRIBUTING.md#translation) to learn how to contribute _your_ language to PA.
:::
