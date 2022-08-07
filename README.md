# Rick And Morty Characters App

## Introduction 
This is a personal project with the aim of show my skills in a technical interview. Also to practice and implement new things when I consider necessary.

### Index Of Content

- [Technologies & Libraries Used](#technologies--libraries-used)
- Project Structure
- Setup & Build

## Technologies & Libraries used

Here I'm going to list the libraries and technologies used and why I've decided to use them:

- **TypeScript**: This doesn't affect the behavior of the app itself but having type safety improves a lot the developer expeerience, reduces bugs and it's useful as documentation. Also it has another wonderful features like super simple way of make anything inmutable, etc.

- **React (frontend)**: Kind of mandatory if want to develop a frontend web app nowadays. It is mandatory for the interview and also is in what I'm proficient.

- **Axios (frontend)**: As promise based HTTP client. Though nowadays seems the native JS fetch is coming back in popularity I've chosen to use this library for the simplicity it provides, specially when you want to do more advanced things like cancel a ongoing request.

- **Redux/Redux Toolkit (frontend)**: This is not my favourite library for global state management in the frontend but it  was mandatory for this interview so I've used it but with Redux Toolkit which provides an opinionated version of Redux and also help you in reduce boilerplate code, **built in inmutability** with Immer and a cleaner structure.

- **Create React App (frontend)**: Is a starter for React project, nowadays I'm not superfan of this when you want to make a serious project but saves you a considerable ammount of time when you just whant bootstrap a relative simple React project like this.
Also this has Jest built in for running tests.

- **ESLint**: As the linter for this app, the best thing is you are programming with JS/TS.

- **@testing-library/react (frontend)**: For helping with the tests. This library helps with rendering components in isolation and testing their behavior. The philosophy is *tests should resemble the way your app mean to be used*.

- **Express (backend)**: As server for the auth API in this case.


