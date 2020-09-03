# VaiDarCerto - digital

Digital Inclusion project for local businesses in small towns.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Version: `0.0.1`
- License: Private project
- Author: [Francis Rodrigues](https://github.com/francisrod01)

## Sites that use this project

- medinamg.com.br

## Main packages version

- React JS - `react@16.3.1`
- Firebase hosting, functions, firestore - `firebase@7.19.1`
- Algolia instantsearch - `react-instantsearch-dom@6.6.0`
- Next.js - `next@9.5.0`
- Material-ui - `@material-ui/core@4.11.0`
- NPM - `npm@6.14.4`
- NodeJS - `node@10.20.1`
- `@grpc/grpc-js`

## First steps to use it

Go to `<path-to-project/>` and run `nvm use` to enable the project's node version.

```bash
$ nvm use
Found '/home/paneladm/paneladm-dev/vaidarcerto/.nvmrc' with version <10.20.1>
Now using node v10.20.1 (npm v6.14.4)
```

## Environment variables

```
BROWSER=none
REACT_APP_RUNNING_AT=__localhost
REACT_APP_FACEBOOK_APP_ID=xxxxx
REACT_APP_FIREBASE_API_KEY=xxxxxxxxxxxxxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=vaidarcerto-xxxxx.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://vaidarcerto-xxxxx.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=vaidarcerto-xxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=vaidarcerto-xxxxx.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxx
REACT_APP_FIREBASE_APP_ID=1:xxxxx:web:xxxxxx
REACT_APP_FIREBASE_MEASUREMENT_ID=G-xxxxxxxxx
REACT_APP_GLOBAL_SETTINGS_SITE_NAME=VaiDarCerto
REACT_APP_GLOBAL_SETTINGS_TWITTER_USERNAME=twitter_user
REACT_APP_GLOBAL_SETTINGS_DOMAIN_URI=http://localhost:3000
REACT_APP_COVID19_REGIONS_AROUND='["alzUcJAbsL","LlLUQQW7em","2v59GBInrd","SgfpOQHx9r","AIzthCzqdx"]'
REACT_APP_GOV_BR_URI=https://xxxxx.execute-api.us-east-1.amazonaws.com/prod
REACT_APP_GOV_BR_APP_ID=xxxxxxxxxxxxxxxxxx
REACT_APP_ALGOLIA_APP_ID=xxxxxxxxxxxx
REACT_APP_ALGOLIA_SEARCH_API_KEY=xxxxxxxxx
REACT_APP_ALGOLIA_ADMIN_KEY=xxxxxxxxxx
```

## <a id="functions_environment_variables"></a>Functions environment variables

This settings is needed tu run on Firebase functions. To learn more about Algolia, check the references at the final section.

```json
{
  "fulltext_search": {
    "algolia": {
      "appid": "xxxxxxxx",
      "object_apikey": "xxxxxxxx"
    }
  }
}
```

### Explaining environment values

**Covid19** module `pageOptions` has a `resourcesAroundUs` property:

The following array is about regions in Brazil. You can change that according to the local Covid19 page: https://covid.saude.gov.br/

To show all the regions instead, keep this array empty.

```json
  regionsAroundUs: [
    "alzUcJAbsL",
    "LlLUQQW7em",
    "2v59GBInrd",
    "SgfpOQHx9r",
    "AIzthCzqdx",
  ],
  ```

## Database import

We're going to import mock data into our new **Firestore database**. So you need to generate your **Service Account** file on your own Firebase project and download it to your **NextJS app**.

First of all, you need to create a `serviceAccount.json` file in `~/src/app/modules/firebase/serviceAccount.json` to run the import script correctly.

Then run the `import-database` file using NodeJS

```bash
~$ node scripts/firebase/admin-connection.js
```

## Available Scripts

> The `dev` and `build` scripts will bund a `firebase-config` script that generate a `_config-object.json` file with the Firebase credentials needed.

In the project directory, you can run:

### On `development` environment:

#### `npm run dev` on development environment

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### In production environment

#### `npm run build` to build on the server production

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

```bash
Automatically optimizing pages

Page                                                           Size     First Load JS
┌ ● /                                                          3.27 kB         119 kB
├   /_app                                                      0 B            86.2 kB
├ ○ /404                                                       2.71 kB        88.9 kB
├ λ /auth/register                                             30.8 kB         278 kB
├ λ /b/[slug]                                                  3.03 kB         239 kB
├ λ /post/[slug]                                               1.47 kB         117 kB
├ λ /post/covid-19                                             1.97 kB         118 kB
├ λ /search                                                    40.4 kB         167 kB
└ λ /tag/[slug]                                                1.95 kB         118 kB
+ First Load JS shared by all                                  86.2 kB
  ├ chunks/a3aad4822a203ba31315771219a7af721782007b.84165f.js  21.5 kB
  ├ chunks/commons.4e9af9.js                                   11.4 kB
  ├ chunks/framework.0e690f.js                                 42.6 kB
  ├ chunks/main.dc10d3.js                                      6.28 kB
  ├ chunks/pages/_app.85d19d.js                                2.38 kB
  └ chunks/webpack.27ee9f.js                                   1.97 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

Redirects

┌ source: /:path+/
├ destination: /:path+
└ permanent: true
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run deploy` to deploy it on Firebase

This is the final step to deploy your application. It should send your functions, hosting, firebase rules and return a successful message on the console.

## Testing through Firebase Emulators

The first step is to select the project from your Firebase projects list based on an **alias**. This is set up in the `.firebaserc` file.

The command to select the `default` alias is below:

```bash
~$ $ ./node_modules/.bin/firebase use default

Now using alias default (vaidarcerto-28531)
```

It's needed to change 2 environment variable's values:

```bash
REACT_APP_RUNNING_AT=localhost
REACT_APP_GLOBAL_SETTINGS_DOMAIN_URI=http://localhost:5000
```

The first line is about running the Firebase emulators, and the second one is about the server-side fetching needs **JavaScript requests policy** to prevent [web-cache poisoning][19].

### Before start the emulators (optional step)

Add a `.runtimeconfig.json` in the root folder containing environments that the local Cloud functions could access. See the section about [**~/Functions Environment Variables**](#functions_environment_variables) section.

### Setting up emulators

```sh
~$ ./node_modules/.bin/firebase init emulators
```

Start the firebase emulators with a short npm command:

```sh
~$ npm run emulators

./node_modules/.bin/firebase emulators:start
```

It will return the following output:

```
i  emulators: Starting emulators: functions, firestore, hosting
✔  functions: Using node@10 from host.
i  firestore: Firestore Emulator logging to firestore-debug.log
i  hosting[default]: Serving hosting files from: dist/public
✔  hosting[default]: Local server: http://localhost:5000
i  hosting[staging]: Serving hosting files from: dist/public
✔  hosting[staging]: Local server: http://localhost:5005
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "/home/user/projects/vaidarcerto/dist/functions" for Cloud Functions...
```

### Start the test environment

For now we have only database tests. We're using Firestore as our database.

```
~$ npm run test
```

### Report a firebase-tools issue

Issues? Report them at [github.com/@firebase-tools/issues][4] and attach the *-debug.log files.

### Testing functions on background

Run `import-data` from emulators scripts to fill data through the full-text search integration.

```sh
~$ node ./scripts/emulators/import-data.js
```

## Analyzing the bundle

```bash
~$ npm run analyze
```

## License

UNLICENSED

## About the project's license

This project is not shared by a license. You're not authorized to use this project for your own purpose.

## <a id="references"></a> References to learn more

- [docs - Create React App documentation][1].
- [docs - React documentation][2].
- [docs - Firebase solutions - Full-text search][3]
- [docs - Run Functions locally][5]
- [docs - Using Firebase emulator Suite - quickstart sample][6]
- [medium.com - A Practical Guide to Regular Expressions (RegEx) In JavaScript][7]
- [github.com - Using ES6 code snippets][8]
- [github.com - Easily combine multiple Firebase data sources][9]
- [medium.com - Imports for Firestore Security Rules Are The Best][10]
- [medium.com - Building a Simple Dynamic Search Bar in React.js][11]
- [medium.com - 10 Things Front-End Developers Should Learn in 2020][12]
- [github.com - Google Maps platform APIs for maps, geolocation, and place search][13]
- [Sentry - self-hosted and cloud-based error monitoring to discover, triage, and prioritize errors in real-time][14]
- [medium.com - Run continuous integration tests using the Firebase Emulator Suite][15]
- [blog - How to Write a Git Commit Message][16]
- [Material-ui - React components for a faster and easier web development][17]
- [Algolia - Building a React server-side rendering SearchUI][18]

  [1]: https://facebook.github.io/create-react-app/docs/getting-started
  [2]: https://reactjs.org/
  [3]: https://firebase.google.com/docs/firestore/solutions/search
  [4]: https://github.com/firebase/firebase-tools/issues
  [5]: https://firebase.google.com/docs/functions/local-emulator
  [6]: https://firebase.google.com/docs/functions/local-emulator
  [7]: http://medium.com/p/9c58feb27eb4
  [8]: https://github.com/30-seconds
  [9]: https://github.com/firebase/firebase-js-sdk/tree/master/packages/rxfire
  [10]: https://medium.com/p/26f0770ad23c
  [11]: http://medium.com/p/f1659d64dfae
  [12]: http://medium.com/p/61b448e75483
  [13]: https://github.com/googlecodelabs/google-maps-nearby-search-js
  [14]: https://sentry.io/
  [15]: http://medium.com/p/9090cefefd69
  [16]: https://chris.beams.io/posts/git-commit/
  [17]: https://material-ui.com/
  [18]: https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/
  [19]: https://www.skeletonscribe.net/2013/05/practical-http-host-header-attacks.html
