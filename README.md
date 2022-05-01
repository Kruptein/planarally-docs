# PlanarAlly Documentation & Blog

Welcome to the repository that contains the source for the PA docs and blogs!

If you're here, you're probably interested in contributing; If you want to add info on missing documentation, clarify sections, fix typos or even write a blog post, you're at the right address!

## Repo Structure

We use the [astro](https://astro.build/) framework together with some [vue components](vuejs.org/) to generate and build the website.

In the `src` folder you can find most files that will be interesting when you want to contribute.

In particular if you want to contribute to the textual content, you can find everything in `src/pages/` which is divided in subsections like the navigation at the top of the website.

If you want to add a completely new document, you'll have to add it to the `src/doc-structure.ts` first (except for blog posts).

### Icons

If you want to reference icons in your document, you have to import the particular icon and you can use it as `<Eye />` (where eye would be an icon you imported). In general FontAwesome icons are preferred wherever suitable, but you can use any icon available on [iconify](https://icon-sets.iconify.design).
