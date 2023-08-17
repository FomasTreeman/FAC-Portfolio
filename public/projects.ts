type Projects = {
    [ProjectKey in 'name' | 'url' | 'md']: string;
}
const PROJECTS: Projects[] = [
    {
        name: 'rent-shield',
        url: 'https://rent-shield.vercel.app/',
        md: `This App was created as part of our final project in collaboration with Judy from Tech for Better.
Rent Shield is a two sided app where landlords and renters can log in and either search or upload a property. The form was designed by the product owner to ensure landlords would upload recent and accurate data.

## Contributing

### Dependencies

After cloning the repository, install all dependencies with \`npm install\`. You can view the project in development in your local server by running:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

| 🍋 Tech Stack 🍉      |
|---------------------|
| Typescript          |
| Supabase            |
| Tailwind + flowbite |
| Next.js (13)        |
| Cypress             |
| Jest                |

## Deployment

Rent Shied is deployed on \`Vercel\`. The Main branch is continuously deployed and can be visited on [this link](https://rent-shield.vercel.app/).

All Pull Requests must meet the following requirements before being merged into the main branch:

- Two collaborating developers have reviewed and approved the request
- The full test suite has been run and passed (this is done automatically when committing any code)
- The pull request includes running and passing tests for any new functionalities in the code (every developer is responsible for testing their code)

## Planning

Development of Rent Shield is tracked using github projects. [This project board](https://github.com/orgs/fac27/projects/36/views/) is updated regularly and informs the roadmap for new features and code base improvements.

We kept to our sprint planning relatively tight and kept to our user stories.
In summary:
We Over estimated complexity by _13.79%_ and under estimated time by _11.33%_ with a total of 29 points worth of tickets.

### MVP

The development of Rent Shield is currently in early stages and is guided towards fulfilling the following user stories:
![screenshot](https://github.com/fac27/rent-shield/assets/114600712/c6488095-75bd-49c0-baab-f8deca27acca)

### Handover
Details for the project and product process can be found [here](https://github.com/fac27/rent-shield/blob/main/handover.md)
There is also a .env example file with the variables
The dev team have created unresolved issues under the label 'handover'
`
    },
    {
        name: 'a-maze',
        url: 'https://main--enchanting-churros-a4027f.netlify.app/', md: `# a-maze

-   a game where the user has to navigate through a maze to get to the next level
-   the user has to input their name & sprite
-   the game has a count down
-   the user must figure out how to navigate on the keyboard without using arrows
-   the users name, sprite, current score, best score is recorded in local storage (maybe the date as well?)

## MVP

we need:

-   login page with input for name & sprite (emoji)
-   emoji package?
-   aesthetics - retro gaming console on old computer
-   name, emoji & best score on header, counter & current score on footer
-   check if anything is in local storage first to decide whether to render login page or mazepage

As a user I want to be able to create a username and emoji so that I can differentiate myself from others
As a user I want to be able to come back and continue where I left off
As a user I want to feel like I'm back in the 80s and I want to feel like i'm not on a website but playing a game
As a user I want to be able to play the game and get feedback if I can move in a certain direction (ie. if I walk into a wall I can't go through it and get feedback that it's the wrong way)

## stretch

-   heart emoji for life
-   sliding door timeout - to block the user
-   setTimeout for current score

As a user I want obstacles with every level
As a user I want a way to get rewarded for passing multiple levels
As an advane vm user, I want a way to find the cheat sheet

## SETUP 

1. clone this repo
2. \`\`\`npm install\`\`\`
3. \`\`\`npm run dev\`\`\`
4. PLAY IT, HAVE FUN!`
    },
    {
        name: 'mood-map', url: 'https://mood-map.vercel.app/', md: `# Mood-Map

This project was the in-house project for FAC27.
Mood Map is an app that allows you to visually record your moods or mediations so that you have something to look back on weekly, monthly, and annually.

Please note:

- deployed login is currently not working but can run locally - please see below for instructions
- Adding a mood will add it to the database but currently there is no user feedback that you've recorded a mood
- we do not have a lot of user feedback for loading and error handling
- if you sign up with an email, you must confirm your email address to login

#### User Stories

1. As a user, I want to be able to create a user account and have the app store my credentials so that I can access the app securely
2. As a user, I want to be able to log my mood for the day in 3 taps/clicks or fewer
3. As a user, I want to be able to view my moods summarised in an easy to understand grid colour map

### Instillation

\`git clone https://github.com/fac27/mood-map\`
      `
    },
    {
        name: 'sobSessions', url: '', md: `# sobSessions

😭 ***A place for people who love a good cry to look at a lists of songs to cry to in different places.*** 😭

This app is designed to allow users to interact with a selection of songs, adding their comments and ratings. Users should be able to view other users comments and ratings. They can sign up and create an account using OAuth.

### Known Issues

We aren't authenticating or deploying at the moment (thanks Bard!) so we have no way to track users or delete specific user posts.

### User Stories

As a user,
- I want to sign in using my GitHub account
- I want to comment on a selection of songs
- I want to add my rating to a selection of songs
- I want to view other users comments

### Installation

Clone the Repo 
\`\`\`
git clone "https://github.com/fac27/sobSessions"
\`\`\`
Install dependencies 
\`\`\`
npm install 
\`\`\`
seed the data
\`\`\`
npm run seed
\`\`\`
Check that you have the correct version of Node 
\`\`\`
node -v
\`\`\`
If there are any issues accessing the fly website you can run locally 
\`\`\`
npm run dev
\`\`\`
Run tests
\`\`\`
npm run tests
\`\`\`

### UX
A wireframe was created using [tldraw](https://www.tldraw.com/r/v2_E2B4vhDM-y3bh5FhSJRXa?viewport=298%2C-90%2C2003%2C1005&page=page%3A9VhkqMKi6LCu7kKg2lkFD)
![Screenshot 2023-06-06 at 09 45 37](https://github.com/fac27/sobSessions/assets/114364165/a83366c7-b996-40c0-8264-93c86821b1fa)

### Database design
A database diagram was created using [db diagram](https://dbdiagram.io/d/647defc2722eb774946b948c)
![Screenshot 2023-06-06 at 10 19 21](https://github.com/fac27/sobSessions/assets/114364165/add629f0-0e90-4aa5-805e-de0675fed97d)


    ` },
    {
        name: 'Zaroff-S', url: '', md: `# Zaroff's

Zaroff's is a retailer of private islands. The homepage shows you a listing of all our exclusive properties, which you can filter by region or - for those of humble finances - by price limit.

You can visit the page of each individual island to find out more about your future property. Once you have made your choice, add your desired islands to the basket and we will charge your AmEx (tax evasion will be respected).

## Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Seed the database:

\`\`\`bash
npm run seed
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Product wireframe

[Link to figma wireframe](<https://www.figma.com/file/XcLkT9I3Yqj6CAoyaB9WmT/Wireframing-(Copy)?type=design&node-id=0%3A194&t=3elTfj6zNjGDX1xo-1>)

![Screenshot from 2023-06-19 16-47-22](https://github.com/fac27/Zaroff-s/assets/32879360/b378c6e6-cc35-40e4-be1e-83c4dc6b1f65)

## Testing

Our page has an end to end testing created and run in Cypress.

You can run our page's tests in the terminal.

Make sure the development server is running:

\`\`\`bash
npm run dev
\`\`\`

Open a new terminal and run:

\`\`\`bash
npm run test
\`\`\`

Alternatively, you can run the tests in the Cypress app:

Open Cypress application:

\`\`\`
npx cypress open
\`\`\`

Select E2E Testing in the application

Select Chrome as your browser

Run Tests
    ` },
    {
        name: 'FAC-Tales', url: '', md: `# FACTales

FacTales allows users to submit movie and book recommendations and view all existing recommendations from other users. Movie recommendations are stored in a SQLite database.

## Collaborating

**Clone the Repo**
\`\`\`
git clone https://github.com/fac27/FACTales/
        \`\`\`
**Install all dependencies**
\`\`\`
npm install
\`\`\`
**Seed your database with test data**
\`\`\`
npm run seed
    \`\`\`

**Start the server**
\`\`\`
npm run dev
    \`\`\`

**Running tests**
\`\`\`
npm run test
    \`\`\`

## User Stories

As a user...

[x] I want to select my name from a drop down list to submit a recommendation

[x] I want to submit a movie recommendation

[x] I want to submit a book recommendation

[x] I want to view the recommendations of others

[x] I want to filter other recommendations grouped by movie or book

[x] I want to use the app on all my devices

### Stretch Stories

[ ] As a user I want to be able to delete my previous recommendations

## Our wireframes
![wireframe](https://github.com/fac27/FACTales/assets/114600712/8de1e4c8-e283-42de-8f02-7f1ed78051d3)


## Mobile first

Our app was created using a mobile first approach to maximise accesibility.

Web view:

![home-web](public/assets/home-web.png)

Mobile view:

![home-mobile](/public/assets/home-web.png)
![board-mobile](/public/assets/board-mobile.png)
![forms-mobile](/public/assets/forms-mobile.png)


    ` },
    {
        name: 't33n-ang5t', url: '', md: `# t33n-ang5t

FacTales allows emotional teens to submit diary entries and view anonymised entries from other users. Diary entries are stored in a SQLite database. Users need to sign up and log in with their own username and password. They can delete their own entries.

## Visit the deployed site

t33n ang5t is deployed [here](https://t33n-ang5t.fly.dev/)

## Collaborating

**Clone the Repo**
\`\`\`
git clone https://github.com/fac27/t33n-ang5t.git
\`\`\`
**Install all dependencies**
\`\`\`
npm install
\`\`\`
**Seed your database with test data**
\`\`\`
npm run seed
\`\`\`

**Start the server**
\`\`\`
npm run dev
\`\`\`

**Running tests**
\`\`\`
npm run test
\`\`\`

## User Stories

As a user, I want to...

- submit information to your site for anyone to see
- come back to your site later and see what I posted is still there
- be the only person allowed to delete my stuff
- hide my identity on my posts from other users
- store my session so I stay logged in for a while
- use the app on all my devices

## Wireframes

[figma](https://www.figma.com/file/ghkJFnIZC3NPK1788j7HK9/Untitled?type=design&node-id=0%3A1&t=GkywJHyUM72xRNx8-1)

## .env 

DB_FILE="./db.sqlite"
COOKIE_SECRET="mwOkzEhuE6D520EZNyD3kGYl"

    ` },
    {
        name: 'fess-booth', url: '', md: `# Fess-Booth
This website allows you to enter a name and a message for other to read. Although you enter a name, the name will remain anonymous to other users - to replicate the experience of a confessional booth.

Our first project as part of FAC's full time program was to create a microblogging side Our goal was to allow users to submit their own posts and view all the posts submitted by others.

**Roles**

Zack - Facilitator

Tom - UX

Mark - DevOps

Cameo - Testing

User Stories:

    As an opinionated person, I want to: post my thoughts so others can read them
    As a bored person, I want to: read what other people have posted
    As an impulsive person, I want to: delete my posts so no one can see them anymore

## Installation

\`\`\` terminal 
git clone "https://github.com/fac27/fess-booth"
\`\`\`
\`\`\` terminal 
npm install
\`\`\`

You can either access this site by going to: https://fess-booth-3.fly.dev/

Or after you clone the repo you can:

\`\`\` terminal 
npm run dev
\`\`\`

## Testing
We create 2 tests:

1. test the sanization of the messages posted
2. test the validation of the entering the name and the message

to run the tests enter the following in the terminal:

\`\`\`terminal 
node--test
\`\`\`

both tests should pass successfully 

#### Things that work
- Everything ofc :) Execept we dont like the form drop down floating on the right of the screen
    - having two branches(development to push to & final review and main to deploy)

#### Things that don't work
    - Persistent posts / data across server restarts. (hack to avoid DB could include a git add data; git commit and a git push so we store the data on the repo ready) (maybe:/ )
        - Git did not work well


            ` },
]
export default PROJECTS