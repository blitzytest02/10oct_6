# Tutorial Server - Node.js Express & Python Flask

## Description

This is a tutorial server application available in **two implementations**:

1. **Node.js with Express.js** - Demonstrates the basics of Express.js web framework
2. **Python 3 with Flask** - Demonstrates the basics of Flask web framework

Both implementations provide identical functionality with two simple HTTP endpoints, making them perfect for beginners learning web development in either language. This allows you to compare and contrast the two popular web frameworks side-by-side.

## Prerequisites

Choose **one** of the following based on which implementation you want to run:

### For Node.js Express Version:

- **Node.js** >= 18.0.0 (current version: v20.19.5)
- **npm** (comes bundled with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

### For Python Flask Version:

- **Python 3** >= 3.8 (recommended: 3.10 or higher)
- **pip** (comes bundled with Python 3)

You can check your versions by running:
```bash
python3 --version
pip3 --version
```

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies for your chosen implementation:

### Node.js Express Installation:

```bash
npm install
```

This will install Express.js and all required dependencies.

### Python Flask Installation:

```bash
# Create a virtual environment (recommended)
python3 -m venv venv

# Activate the virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install Flask and dependencies
pip3 install -r requirements.txt
```

This will install Flask and all required dependencies.

## Running the Server

### Node.js Express Server:

To start the Node.js server, run:

```bash
npm start
```

The server will start on port 3000 by default. You should see the message:
```
Server is running on http://localhost:3000
```

**Custom Port Configuration:**
```bash
PORT=8080 npm start
```

### Python Flask Server:

To start the Python server, run:

```bash
# Make sure your virtual environment is activated (if you created one)
python3 app.py
```

The server will start on port 3000 by default. You should see the message:
```
Server is running on http://localhost:3000
```

**Custom Port Configuration:**
```bash
PORT=8080 python3 app.py
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
│
├── Node.js Implementation:
├── package.json        # Node.js project manifest and dependencies
├── package-lock.json   # Node.js dependency version lock file
├── server.js           # Main Express.js application
├── node_modules/       # Node.js installed dependencies (not tracked in git)
│
├── Python Implementation:
├── requirements.txt    # Python dependencies
├── app.py              # Main Flask application
└── venv/               # Python virtual environment (not tracked in git)
```

## Learning Objectives

This tutorial demonstrates (across both implementations):

**Node.js Express Version:**
- How to initialize a Node.js project with npm
- How to install and import Express.js
- How to create an Express.js application
- How to define GET routes/endpoints in Express
- How to configure the server port in Node.js
- How to start and run a Node.js server

**Python Flask Version:**
- How to set up a Python virtual environment
- How to install and import Flask
- How to create a Flask application
- How to define GET routes/endpoints using decorators
- How to configure the server port in Python
- How to start and run a Flask server

**Common Concepts:**
- REST API endpoint design
- HTTP GET requests and responses
- Plain text response handling
- Environment variable configuration
- Port configuration and management

## License

MIT