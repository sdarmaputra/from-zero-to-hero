# "From Zero to Hero" Example

This is a slightly modified [Todo MVC](http://todomvc.com/) sample app
[using React](http://todomvc.com/examples/react/) (initially created
by @petehunt):

To run the app:
```bash
npm install
npm start
```

and then open a web browser pointing to http://localhost:9000.

## Git Hooks

Create a simple pre-commit hook:
```bash
cat << EOF >> .git/hooks/pre-commit
npm run jscs
EOF
```
and make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

Now try to edit a file, e.g. `js/util.js`, and violate its coding style. When you try to commit your change, Git will complain.

## Code Complexity

Show the summary of code complexity (using [JSComplexity](http://jscomplexity.org/)):
```bash
npm run complexity
```

## Code Coverage

Run the unit tests and track the code coverage:
```bash
npm run coverage
```
and open the file `coverage/html/index.html` for the coverage report.

For this repository, it is also tracked at [codecov.io/github/ariya/from-zero-to-hero](https://codecov.io/github/ariya/from-zero-to-hero).

## Evergreen Browser Tests

The unit tests are being executed with the latest Chrome and Firefox using AppVeyor ([read more](http://ariya.ofilabs.com/2015/09/javascript-testing-with-latest-firefox-and-chrome-on-appveyor.html)).

The example run is available at [ci.appveyor.com/project/ariya/from-zero-to-hero](https://ci.appveyor.com/project/ariya/from-zero-to-hero).

## Browser Compatibility Tests

The unit tests are being executed with a number of different web browsers using Sauce Labs.

Assuming that the username and access key are stored in the environment variable `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`, Sauce Connect can be initiated as follow (on Linux):

```bash
wget -q https://saucelabs.com/downloads/sc-4.3.11-linux.tar.gz
tar -xzf sc-4.3.11-linux.tar.gz
export PATH=$PATH:`pwd`/sc-4.3.11-linux/bin
sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -f ~/sc_ready &
sleep 25
while [ ! -e ~/sc_ready ]; do sleep 5; done
```
and then run the tests with a special Karma configuration:
```bash
npm run saucelabs
```
