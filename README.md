# Rick And Morty Characters App

## Introduction

This is a personal project with the aim of show my skills in a technical interview. Also to practice and implement new things when I consider necessary.

### Index Of Content

- [Technologies & Libraries Used](#technologies--libraries-used)
- [Project Structure](#project-structure)
- [Setup & Build](#setup--build)
- [Deployment](#deployment)

## Technologies & Libraries used

Here I'm going to list the libraries and technologies used and why I've decided to use them:

- **TypeScript**: This doesn't affect the behavior of the app itself but having type safety improves a lot the developer experience, reduces bugs and it's useful as documentation. Also it has another wonderful features like super simple way of make anything immutable, etc.
- **React (frontend)**: Kind of mandatory if want to develop a frontend web app nowadays. It is mandatory for the interview and also is in what I'm proficient.
- **Axios (frontend)**: As promise based HTTP client. Though nowadays seems the native JS fetch is coming back in popularity I've chosen to use this library for the simplicity it provides, specially when you want to do more advanced things like cancel a ongoing request.
- **Redux/Redux Toolkit (frontend)**: This is not my favorite library for global state management in the frontend but it  was mandatory for this interview so I've used it but with Redux Toolkit which provides an opinionated version of Redux and also help you in reduce boilerplate code, **built in inmutability** with Immer and a cleaner structure.
- **Create React App (frontend)**: Is a starter for React project, nowadays I'm not superfan of this when you want to make a serious project but saves you a considerable amount of time when you just want bootstrap a relative simple React project like this.
Also this has Jest built in for running tests.
- **ESLint**: As the linter for this app, the best thing is you are programming with JS/TS.
- **@testing-library/react (frontend)**: For helping with the tests. This library helps with rendering components in isolation and testing their behavior. The philosophy is *tests should resemble the way your app mean to be used*.
- **Express (backend)**: As server for the auth API in this case.
- **MongoDB (backend)**: General purpose document based database. Mandatory requirement too.
- **Mongoose**: Popular ORM used in combination with MongoDB.
- **bcryptjs**: to hash the passwords  so they are stored in a secure way in the database.
- **jsonwebtoken**: to generate tokens and verify them. This allow control API access.
- **nodemon**: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Project Structure

The project is a monorepo and is divided between the `/frontend` and `/backend` folders, each with its own `package.json` to minimize build sizes and dependencies conflict.

### Frontend

```folders
|- src
|   |- components
|   |- features
|   |- hooks
|   |- pages
|   |- redux
|   |- services
|   |- styles
|   |- types
|   |- utils
```

I've chosen this folder layout because for me is the one which makes more sense for a frontend project with React and TypeScript. I think is pretty self explanatory though for me sometime the line between *components* and *features* is a bit diffuse and I don't know if I'm always applying the correct separation of concerns.

### Backend

```folders
|- src
|   |- controllers
|   |- models
```

Here I've applied the standard folder structure for a backend made with Express and a combination of MongoDB with mongoose.

## Setup & Build

### Installation

First of all make sure you have **Node** and **NPM** installed in your system. Also I highly recommends you have installed **v16.X**  for Node and **v8.X** to avoid compatibility issues.

First install the dependencies for each part of the app.

```bash
cd frontend/
npm install
```
```bash
cd backend/
npm install
```

Another thing you are going to need to execute the backend successfully is **MongoDB** installed in your system. You can learn how to install it here. <https://www.mongodb.com/docs/manual/installation/>

### Execute

To run a development environment run these commands from the root folder:

```bash
cd frontend/

npm start

cd ../backend/

npm run dev
```

### Build

Execute `npm run build` in both project folders.

## Deployment
WIP