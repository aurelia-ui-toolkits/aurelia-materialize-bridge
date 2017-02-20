## Contributing
The following steps will allow you to contribute to our project:

1. Fork the plugin
2. Run `npm install` in the root directory
3. Run `jspm install` in the `sample` directory
4. Make any changes
5. Use the embedded sample app to check if your changes didn't break anything. Run `gulp watch` and browse to `http://localhost:3000`.
6. Run all unit tests using `gulp test`
7. Run `gulp build` (and fix any errors)
8. Run `gulp lint` (and fix any errors)
9. Create a git commit using our [commit message guidelines](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/wiki/Development-Protocol) so your change can be automatically added to the changelog. **Note**: Don't include any dist output (f.i. from running `gulp build-release`).
10. Create a pull request
