# PlanarAlly.io

The documentation and blog location for [PlanarAlly](https://www.planarally.io/).

This website is built using gridsome.

## Contributing

The navigation is specified in the yaml files in src/data/, you can add or rename entries here as you see fit.
The links in those files are relative to the root of this project, so in practice they relate to the markdown files in docs/ and in tutorial/.

If you create a PR, netlify will create a special build that you can preview online.
You can also run things on your own machine, to do this clone the repository and follow the following steps:

1. `npm i`
2. `npm run develop` (This hot reloads changes you make)
   or
3. `npm run build` (This creates a production build)
