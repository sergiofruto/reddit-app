# Reddit App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the root folder run
`yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test`
Launches Jest test task

# Project:
The project uses React, styled-components for styles(in this scale might be a little bit too much, but in a real project I think it's the best solution for CSS in JS, especially the scoped styles and theme capabilties) and Redux to handle the state across app.

### File Structure
- `redux`: In this folder we have the actions, reducers and the store. Also a small js file to save state and retrieve from `localStorage`.
- `components`: 
    - `App`: Since we are consuming state from Redux, there was no need for too much logic here, It’s just a wrapper, but it contains the logic for the swipe effect.
    - `Sidebar`: Renders list of PostCards, consuming the `post[]` from the Redux store.
    - `PostCard`: Receives a post and renders it’s elements. We are using react useState for checking the read status, based on `readPost:[]` state from the Redux store
    - `MainContent`: Renders the selected post based on user interaction, consuming `selectedPost[]` from the Redux store.

## Redux Logic
Our shared state in the app looks like this:
`state = {
  posts: [],
  selectedPost: [],
  readPosts: [],
  dismissedPosts: [],
  sidebar: false,
};`

- `posts: []` is our collection of posts. This will get populated when `FETCH_TOP_POSTS` is called
-  `selectedPost: []` is a single post that is pushed to our state when user clicks on a `<PostCard>` component. It will be used to render the selected post in `<MainContent>`
-  `readPosts: []` is simply a collection of strings (post id) that gets updated every time the user selects a post. Based on this array we mark the posts as read or not.
-  `dismissedPosts: []` is simply a collection of strings (post id) that gets updated every time the user dismissses a post. Based on this array we filter the posts to show the user only posts that were not dismissed
-   `sidebar: false` simple boolean to preserve the sidebar open/closed state

Missing feature: 
"In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture."
For some reason can’t use reddit urls from the preview object to work on the local app. But the logic it’s there in the MainContent component:
`{/* {selectedPost.preview.images && <PostImage src={selectedPost.preview.images[0].source.url} alt={selectedPost.title} />} */}`

