# Todo App with ReactJS, Express, Postgres, and JWT Authentication

Welcome to the Todo App repository! This project combines the power of ReactJS, Express, Postgres, and JWT authentication to create a simple and efficient Todo application that will help you stay organized and productive.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting up the Database](#setting-up-the-database)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

Do you often find yourself struggling to keep track of your tasks? Fear not! The Todo App is here to rescue you from the chaos and boost your productivity. Whether it's a simple shopping list or a complex project, this application will streamline your task management process and make it a breeze to stay organized.

The Todo App is built on top of powerful technologies like ReactJS, Express, and Postgres, providing a robust and scalable solution. Furthermore, I've implemented JWT (JSON Web Tokens) for secure authentication, ensuring your todo lists are safe and private.

## Features

- **Intuitive User Interface**: A simlpe and user-friendly interface that makes organizing tasks a delightful experience.

- **Task Progress**: Mark tasks progess as you breeze through them with visually helping progress bar.

- **Secure Authentication**: Utilize JWT-based authentication to keep your tasks safe from prying eyes.

- **Cross-Platform**: Access your tasks from anywhere, whether on your desktop, tablet, or smartphone.

## Getting Started

To get started with the Awesome Todo App, follow the instructions below.

#### Prerequisites

Before running the application, ensure you have the following installed on your machine:

- Node.js (>= 12.0.0)
- npm (>= 6.0.0) or yarn (>= 1.0.0)
- PostgreSQL (>= 9.0)

#### Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone git@github.com:MaharshiV16/To-Do-App.git
   ```

2. Install dependencies in all the folders
   a. Root of application
   b. Client
   c. Server

   Using the command
   npm install or yarn
   (Prefer yarn in the Client)

#### Setting up database

1. Create a PostgreSQL database named "todoapp".

2. Inside the "server" directory, you'll find a file called "createdb.sql." Use the following commands to create the necessary tables:

### Usage

1. Start the client application using
   ```bash
   yarn run dev --port 5173
   ```
2. Start the server using
   ```bash
   npm run start --port 8000
   ```
3. Make sure the database is up and running

Now you are all set! Start adding tasks,, and organizing your life with the Todo App.

### Contributing

I welcome contributions from the community to make this project even more awesome! If you have any feature suggestions, bug reports, or pull requests, please don't hesitate to share them with me. Let's collaborate and create something amazing together!
