# Node.js Express Tutorial Server

## Description

This is a tutorial Node.js server application that demonstrates the basics of Express.js web framework. The project shows how to create a simple HTTP server with multiple endpoints using Express.js, making it perfect for beginners learning Node.js web development.

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** >= 18.0.0 (current version: v20.19.5)
- **npm** (comes bundled with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install the dependencies:

```bash
npm install
```

This will install Express.js and all required dependencies.

## Running the Server

To start the server, run:

```bash
npm start
```

The server will start on port 3000 by default. You should see the message:
```
Server is running on http://localhost:3000
```

### Custom Port Configuration

You can specify a custom port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Available Endpoints

The server provides two simple endpoints:

### GET /

Returns a simple greeting message.

**Response:**
```
Hello world
```

**Example Request (Browser):**
```
http://localhost:3000/
```

**Example Request (curl):**
```bash
curl http://localhost:3000/
```

### GET /evening

Returns an evening greeting message.

**Response:**
```
Good evening
```

**Example Request (Browser):**
```
http://localhost:3000/evening
```

**Example Request (curl):**
```bash
curl http://localhost:3000/evening
```

## Testing the Endpoints

You can test the endpoints using any of these methods:

1. **Web Browser:** Simply open your browser and navigate to:
   - http://localhost:3000/
   - http://localhost:3000/evening

2. **curl (Command Line):**
   ```bash
   curl http://localhost:3000/
   curl http://localhost:3000/evening
   ```

3. **API Testing Tools:** Use tools like Postman or Insomnia to send GET requests to the endpoints

## Project Structure

```
/
├── .gitignore          # Git exclusion patterns
├── README.md           # This file
├── package.json        # Project manifest and dependencies
├── package-lock.json   # Dependency version lock file
├── server.js           # Main Express.js application
└── node_modules/       # Installed dependencies (not tracked in git)
```

## Learning Objectives

This tutorial demonstrates:

- How to initialize a Node.js project with npm
- How to install and import Express.js
- How to create an Express.js application
- How to define GET routes/endpoints
- How to send simple text responses
- How to configure the server port
- How to start and run a Node.js server

## License

MIT