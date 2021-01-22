# Reddit App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches Jest test task

### Project:
- The project uses React, styled-components for styles(in this scale might be a little bit too much, but in a real project I think it's the best solution for CSS in JS, especially the scoped styles and theme capabilties) and Redux to handle the state across app.

## File Structure
- redux: In this folder we have the actions, reducers and the store. Also a small js file to save state and retrieve from localStorage.
- components: 
 - App: Since we are consuming state from Redux, there was no need for too much logic here, It’s just a wrapper, but it contains the logic for the swipe effect.
 - Sidebar: Renders list of PostCards, consuming the post[] from the Redux store.
 - PostCard: Receives a post and renders it’s elements. We are using react useState for checking the read status, based on readPost:[] state from the Redux store
 - MainContent: Renders the selected post based on user interaction, consuming selectedPost[] from the Redux store.


Missing feature: 
"In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture."
For some reason can’t use reddit urls from the preview object to work on the local app. But the logic it’s there in the MainContent component:
`{/* {selectedPost.preview.images && <PostImage src={selectedPost.preview.images[0].source.url} alt={selectedPost.title} />} */}`

