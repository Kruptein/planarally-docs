# Dashboard

After a successful login, the dashboard will be shown.
It consists of a navigational bar on the left and a content section on the right.

:::warning Incomplete feature!
The dashboard has been re-designed for PlanarAlly 0.26.0 and is not fully completed.
Right now, *Assets* and *Settings* lead to pages unchanged from prior versions of PlanarAlly.
Until these are changed to the new dashboard, you will need to go back to the dashboard, manually via the *move back* function of your web browser, or the browser's address line.
:::

## Localisation
In the top-left corner of the navigational bar lies the localisation button which lets you choose a localisation of PlanarAlly off a drow-down menu.

:::info Translation Fallback
Note that translations *may* be incomplete.
In case a translation of something in the user-interface is missing, the interface will fall back to the english translation for this specific element.
:::

At the moment, PlanarAlly supports the following languages (at least to a certain extent):
* English (en)
* 简体中文 (Simplified Chinese, zh\_CN)
* Deutsch (German, de)
* Русский (Russian, ru)
* Danks (Danish, dk)
* Español (Spanish, es)
* 繁體中文 (Traditional Chinese, zh\_TW)
* Italiano (Italian, it)

:::tip Help translate!
In case you're encounter translation errors, missing strings or a localisation to your language, feel invited to help out!
See [the contribution guidelines on github](https://github.com/Kruptein/PlanarAlly/blob/dev/CONTRIBUTING.md#translation) to learn how to contribute *your* language to PA.
:::

## Game
The *Game* section offers you to play, run, and create games.

### Play

Clicking *Play* will open a list of all campaigns that you did not create, but are a player in.
Even if the creator of a campaign granted you DM status via the [campaign settings](/docs/dm/settings/#players), you will still find this campaign in the *Play* list, not the *Run* list.

The list will show the campaigns with their name next to the campaign's logo.
Clicking on a campaign's entry will transform its logo into a play symbol and show further information on this campaign in a campaign details bar to the right.
You may now jump into the campaign, clicking on the play symbol in the list or through the `Launch!` button at the bottom of the campaign details bar, both bringing you ultimately to the [game board](/docs/player/gameboard).

To the right, a campaign details bar is displayed, showing information on the selected campaign.
On top, the campaign's logo is shown, followed by the campaign's name and the username of the campaign's creator.

Below that, the `Launch!` button will bring you to the game board.

Below the lauch button, the `Last playtime` indicator will display the date of the last time *you* accessed the campaign.

A simple `Notes` input follows.
The notes entered here are *personal* to your account.

At the bottom, the `Leave` button offers you to permanently leave the campaign.
A DM's invitation link will be necessary to re-join.

### Run

Clicking *Run* will open a list of all campaigns that you created, regardless of whether you still have DM status within the game, or not.

This will display just as described above under [Run](#run), with the following differences:
* the campaign's logo is editable by clicking on the display at the top of the campaign details bar,
* the campaign's name is editable by clicking the edit <font-awesome icon="pencil-alt"/> symbol next to it,
* instead of leaving, you can *delete* the campaign – for all players!

:::info Logo upload
The logo has to be uploaded as an [asset](/docs/dm/assets).
:::

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
This feature has not been made yet, the link in the navigational bar is just a placeholder.
:::

## Settings

This will open your account settings.

:::info Incomplete feature integration
The account settings manager is not yet fully integrated into the dashboard.
Expect full functionality, but different look-and-feel.
:::

### General

The general settings will display your username.
Currently, there is no possibility to change your username other than directly manipulating the database.
This is limited to the server's admin and discouraged in general.

You can, however, modify your email-address.

:::tip Optional Feature
Registering email-addresses to your account is a completely optional feature.
*No* feature of PlanarAlly relies on emails in any way.
However, entering an email-address might ease communication with the server's admin/hoster.
:::

### Danger Zone

The *danger zone* offers to change your password or delete your account.

#### Change password

*Change password* will open inputs to enter and confirm a new password.

### Delete Account

*Delete account* will enable to delete your account.
You will be warned that this action is irrevocable.

:::warning Incomplete Feature!
The account settings are not fully implemented, yet.
Deleting your account via the account settings is currently not possible.
:::

:::warning Final Decision!
Deleting your account is irrevocable.
:::

## Logout
Clicking this will, not very surprisingly, log you out of PlanarAlly.
