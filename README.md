# Node.js Hapi PostgreSQL Project

Welcome to the Node.js Hapi PostgreSQL Project! This project aims to provide a back-end solution using Node.js with the
Hapi framework and PostgreSQL database. It allows you to create a robust server-side application with database
connectivity, routing, and more.

## Project Overview

This project is designed to help you learn how to build a full-stack application using Node.js for the back end. It
includes:

- **Server Setup:** The server is set up using the Hapi framework, enabling easy route handling and request processing.

- **Database Connectivity:** PostgreSQL is used as the database, and the `pg` library is utilized for database
  connectivity and query execution.

- **Available Routes:** Several routes are defined for CRUD (Create, Read, Update, Delete) operations on listings.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.

2. Install the necessary dependencies by running `npm install` in your terminal.

3. Make sure PostgreSQL is installed and running on your machine. Configure the database connection details in a `.env`
   file.

4. Launch the Node.js server by running `npm start`.

5. You're all set! Start building your server-side logic and endpoints.

## Project Structure

This project follows a modular structure for easy maintenance and scalability. Here's an overview of the main files and
directories:

- **index.js:** The entry point of the application. It sets up the Hapi server, defines routes, and connects to the
  PostgreSQL database.

- **routes.js:** Contains the route definitions for various endpoints. Each route is defined as a separate module for
  better organization.

- **database.js:** Handles the database connection using the `pg` library. It exports functions to connect to the
  database and execute queries.

## Available Routes

This project defines several routes for CRUD operations on listings. Here's a list of available routes:

- **GET /listings:** Retrieve all listings.
- **GET /listings/{id}:** Retrieve a single listing by ID.
- **POST /listings/{id}/add-view:** Increment the view count of a listing.
- **GET /users/{id}/listings:** Retrieve listings created by a specific user.
- **POST /listings:** Create a new listing.
- **PUT /listings/{id}:** Update an existing listing.
- **DELETE /listings/{id}:** Delete a listing.

---

Happy coding!

---
