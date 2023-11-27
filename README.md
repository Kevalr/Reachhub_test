
# Overview
This README provides essential information for setting up, using the API, and optimizing performance for the project.

## Tech Stack
**Client:** React, TailwindCSS

**Server:** Node, Express, postgresSQL

## Project 
- This project using react js as frontend and nodejs for backend with postgressql data. 
- features 
    - user authentication
    - Top chess players list
    - Player Ratings history in chat format

## Setup Instructions
- clone the repo: git clone https://github.com/Kevalr/Reachhub_test
- install the dependencies for client and server folders separately
- make sure your pgAdmin is running.
- start the backend using following command in server folder - npm run dev
- start the frontend using following command in client folder - npm start

## API Usage

For signing up user - http://localhost:3000/api/auth/signup
with body - {username: '', password: '', email:''}

For sign in user - http://localhost:3000/api/auth/signin
with body - {email: '', password:''}

For fetching top 50 players list - http://localhost:3000/api/topplayerslist
with header - {'x-access-token': 'your token'}

For fetching player ratings history - http://localhost:3000/api/playerratingshistory
with header - {'x-access-token': 'your token'}
with body - {username: 'player user name'}




