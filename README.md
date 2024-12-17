# Netflix GPT
- Create React App (npx create-react-app netflix-gpt)
- Configured TailwindCSS (https://tailwindcss.com/docs/guides/create-react-app)
- Header
- Routing
- Login Form
- Sign Up form
- Form Validation
- useRef hook
- Firebase Setup
- Deploying the app to prod (firebase login, firebase init, firebase deploy)
- Sign Up the first user account
- Implement Sign in with email& password using firebase
- Created a user store with Redux Slice
- Implement SignOut
- update user profile with display name in firebase
- Bugfix: SignUp user displayName & profile picture update
- Bugfix: Redirect /browse req to login page if the user is not logged in & vice-versa
- Unsubscribed to the onAuthStateChanged callback
- create a constants file & add the hardcoded strings to this file
- Register in TMDB  & create an App & get Access token
- Get Movie Data from Now Playing movie list API
- created Custom Hook for fetching Now Playing Movies 
- created movies slice
- updated movies slice with NowPlaying Movies data
- Planning for MainContainer & secondary container
- Fetch data for Trailer video & Update store with Trailer video data
- Embedded youtube video & made it autoplay in mute & in loop
- CSS to make MainContainer look more like Netflix
- Build Secondary Container
- Build Movie List Component
- Build Movie Card Component
- TMDB Image CDN URL
- custom hooks for for all movies list
- 
 
# Features
- Login/Sign Up 
  - Login & Sign Up form
  - After login Redirect to Browse page
- Browse (after Authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & description
  - Movie Categories

- Netflix GPT
  - search bar 
    - Movies

# Planning
- Login & SignUp screen
- Header(After Authentication)
  - logo
  - Home
  - Search 
  - UserIcon
- Body
  - Trailer Playing in Background
  - Name
  - List of Movie Categories
     - list of movies in each category
- Footer
  - Socials
  - Contact Us
# ----------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
