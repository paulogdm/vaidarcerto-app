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
REACT_APP_RUNNING_AT=localhost
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

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing through Firebase Emulators

### Before start the emulators

Add a `.runtimeconfig.json` file into `functions` folder containing environments that the local Cloud functions could access. See the section about [**~/Functions Environment Variables**](#functions_environment_variables) section.

### Setting up emulators

```sh
~$ ./node_modules/.bin/firebase init emulators
```

Start the firebase emulators like below:

```sh
~$ ./node_modules/.bin/firebase emulators:start
```

Showing the following output:

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
