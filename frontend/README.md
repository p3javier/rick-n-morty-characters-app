# Rick And Morty App Frontend Package

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I've decided to use CRA in order to save time with the initial project setup.

## Libraries & Technologies Used

### Libraries

This project uses the following set of libraries not mentioned in the main project's README.md:

- **Jest**: As the test runner, this is provided internally by Create React App.
- **Prettier**: For enhanced code formatting.

### Technologies

This section is more to explain why I've taken some technical decisions rather than show what technologies I've used.

#### Token Storage

I've decided to use `localStorage` API instead of traditional cookies to store session tokens for few reasons:

- Cookies are not encrypted.
- Cookies are sent in every request to the server even when you don't need them.

- With `localStorage` API you can store way more data.
- With `localStorage` you have explicit control of what HTTP request send the token to the server.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

To run unit and integration tests. Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

To get tests coverage metrics.

### `npm run lint` && `npm run lint:fix`

To run the lint in the project and allow ESLint to fix the error automatically when possible, respectively.

### `npm run cy`

To run e2e tests with Cypress.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
