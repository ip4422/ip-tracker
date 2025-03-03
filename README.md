# IP address tracker

Build out IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations use the [IP Geolocation API by IPify](https://geo.ipify.org/). To generate the map use [LeafletJS](https://leafletjs.com/).

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## Tech Stack

- TypeScript
- Remix
- LeafletJS
- IPify API
- Tailwind CSS
- Vite

## Expectations

- Desktop version
- Complete the location service API in Remix and using Typescript
- Commit often enough that we can review your process rather than just the finished product
- In other areas please work towards your perception of good standards

## Nice to have

- Mobile version
- No-JS implementation

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
