# WCS Students Portfolio

Project developed for WCS to show the portfolio of the Barcelona bootcamp students. It is a collaborative project between students to show their work during the bootcamp and also a repository where they can show well structured code.

## App structure

The app contains a whole state stored in a context provider. This context is in charge of the language selection (all texts are stored in a `Texts.js` file, current languages are `spanish` and `english`).
Context also stores an array of students. Each student info is stored in their own js file with the followin structure:
```javascript
export const StudentName =
{
  english: {
    name: 'Your name',
    email: 'Your email',
    from: 'Country',
    livingIn: 'Current country',
    dateOfBirth: 'date',
    linkedin: 'Linkedin url',
    languages: ['language1', 'language2', 'language3'],
    shortDescription: 'short description',
    longDescription: 'long description',
    github: 'github url',
    technologies: ['tech1', 'tech2', 'tech3', 'tech4'],
    personalProjects: [
      {
        projectName: 'Project1 name',
        projectGithub: 'Project1 github',
        projectLink: 'Project1 link',
        projectDescription: 'Project1 description',
        collaborators: ['collab1', 'collab2', 'collab3'],
        technologies: ['tech1', 'tech2', 'tech3'],
      },
    ],
    facebook: 'facebook url if you want to share it',
    instagram: 'instagram url if you want to share it',
    twitter: 'twitter url if you want to share it',
    video: 'youtube url',
    calendly: 'calendly link',
  },
  spanish: {
    name: '',
    email: '',
    from: '',
    livingIn: '',
    dateOfBirth: '',
    linkedin: '',
    languages: ['', '', ''],
    shortDescription: '',
    longDescription: '',
    github: '',
    technologies: ['', '', ''],
    personalProjects: [
      {
        projectName: '',
        projectGithub: '',
        projectLink: '',
        projectDescription: '',
        collaborators: ['', '', ''],
        technologies: ['', '', ''],
      },

    ],
    facebook: '',
    instagram: '',
    twitter: '',
    video: '',
    calendly: '',
  },
};
```

Context also stores an array of mentors. Each mentor info is stored in their own js file with the followin structure:

```javascript
export const MentorsList = {
  english: {
    name: 'mentor name',
    email: 'mentor email',
    role: 'mentor role',
    linkedin: 'linkedin url',
    profilePicture: 'profile picture',
    shortDescription: 'short description about his/her job in the bootcamp with students',
  },
  spanish: {
    name: '',
    email: '',
    role: '',
    linkedin: '',
    profilePicture: '',
    shortDescription: '',
  },
}
```

On this same context a method to randomly shuffle the array of students is declared, so on every reload of the page, the order of students in the main page will be different.

The `Student Profile` page is designed to show what the student filled on it's object assigned. If the student didn't fill any part, there's a logic to control that.
There's also a logic to control to fill again on the context the selected student if you get to that route without navigating through the main page.


## Code guidelines

### Technologies
 - React v16.13
 - React router v5.1
 - PropTypes v15.7
 - Eslint (+ airBnB) v6.8

### How to work on it

The app contains a global state controlled by the context provider.
Every React component written is treated as a pure function, it will use hooks if it need any React functionalities.
It should follow the specified Eslint rules, in order to run it, execute the `npx eslint src/`


## Git guidelines

### How to work with git here

All the code ready to be deployed is always on master branch.
The dev branch is where all work will be pushed, from there a PR to master will be created. If accepted it will be merged to master.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
