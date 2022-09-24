[![Build Status](https://cubedata.semaphoreci.com/badges/cloudflare-uxwizz/branches/master.svg?style=shields&key=b84204f0-0d7f-4ff5-b9da-e1e7aab63b53)](https://cubedata.semaphoreci.com/projects/cloudflare-uxwizz)

This is a CloudFlare app to automatically inject UXWizz tracking JavaScript
code into your CloudFlare powered website.

It (currently) does not support all the UXWizz JavaScript tracking code
features, so feel free to submit a PR if you can add any of the features.
We'll be happy to merge it.

## Browser Support

Browser support should be universal. Automated tests are
run on all modern, evergreen browsers thanks to
[Sauce Labs](https://saucelabs.com/opensauce).


## Developing

We're using a [GulpJS](http://gulpjs.com) powered build system. JavaScript code is
automatically built using Uglify . Just run
the follow command to get started:

```bash
gulp
```

That will kick off both the Karma test runner and JSHint linting.
Both will run constantly in the background, and run the tests
in the following browsers:

- Chrome
- Chrome Canary
- Firefox
- Opera
- PhantomJS

## Testing

Any pull requests should be fully tested.

Unit testing is done with [Karma](https://karma-runner.github.io/).


### Running tests once

To run the unit tests, simply run the following command:

```bash
gulp test
```

### Building for production

Run the build command. It runs all the tests first, and
then builds the files if everything passes.

```bash
gulp build
```

## To Do

- Complete the tracking code options to match the UXWizz dashboard.
