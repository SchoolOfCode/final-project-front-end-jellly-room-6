# JELLLY.
### A mobile friendly app designed to help to learn math and improve financial literacy in real-world situations that it was created using NextJS and Postgress.
## Motivation
### This app was created by Liam Burton, Laurence Nunn, Yegana, Loreen Fraser-Owusu, Elena Sparshott, and Juan Castel for the four-week final project School of Code Bootcamp. We wanted to create an app that makes learning math more appealing for young adults.

## Description.
### After the user login through Auth0, it can put into practice its math knowledge by selecting a topic of interest on the home page. The user will be challenged to answer a series of 5 questions and if they answer correctly more than 50% of them, the user will pass the test. Every time the user plays a quiz, they will win points of experience and beans proportionally of their results. The beans can be exchanged in the shop for different images for their avatar, and the players can check their details and compare with other users in the dashboard and leaderboard pages respectively.

### See the app here: https://jellly.netlify.app/

## Contents:

- [Users](#users)
- [Questions](#questions)
- [Profile](#profile)
- [Shop](#shop)
- [API](#api)

# Users

- User login details and personal info are protected with <b>Auth0</b> on a separate database. 
- A separate users table is allocated on heroku for storing <b>JELLLY</b> app specific data, such as XP, Level, and beans.
- <b>JELLLY</b> related info is retrieved after a user is logged in and authenticated based on the username they signed up to <b>Auth0</b> with. 
- <b>JELLLY</b> related User information, including completed categories, are returned as an object from the `useUserInfo` hook by passing in the authenticated user.
- See [here](./src/hooks/readme.md) for more info and usage.

### src/hooks
<hr/>

`getUserLevel(xp)` - Calculates a user's level based on their current xp value.

# Questions

- 5 Categories separated into 25 sub-categories.
- Questions are fetched via a query on selecting a category in `pages/question.js`.
- Completing a category 'unlocks' it; rewards the user and sends the completed category to `/categories/:userId`

### pages/question.js
<hr/>

`const questionCount` - The number of questions to give the user. Returns a shuffled array of questions.

### src/components/Results
<hr/>

`function hasCompletedCategory(categoryToCheck)` - Ensures the user isn't rewarded if this category exists in the User info object.

`async function rewardUser(XP, beans)` - Gives the user the specified amount of XP and beans.


# Profile

- Renders details from Auth0User information such as email and avatar.
- Displays the user's achievements and stats.

# Shop

- WIP..

# API
### /users
- GET `/users` - Returns all users
- GET `/users/:username` - Retrieves a single User by username. The username must match the entry the user signed up with when registering to Auth0.
- POST `/users` - Creates a new `JELLLY` user. Requires a `username` sent in the body of the request. Returns the new user.
- PUT `/users/:user_id` - Used to reward a user with XP and beans. Replaces the user with the specified ID. Requires an `XP` amount and a `beans` amount send in the body of the request. Returns the updated user.
- DELETE `/users/:user_id` - Deletes a user with the specified ID. Returns the deleted user.

<br/>

### /categories
- GET `/categories/:user_id` - Returns a list of categories completed by this user.
- POST `/categories/:user_id` - Adds a category to this user's list of completed categories. Returns the added category.
- DELETE `/categories/:user_id/:category` - Removes the specified category from the user's list of completed categories. Returns the deleted category.

<br/>

### /questions
- GET `/questions/:category` - Returns a list of questions from the specified category.

<br/>

## [Back to top](#)