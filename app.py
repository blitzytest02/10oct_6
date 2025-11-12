#!/usr/bin/env python3
"""
Python Flask Tutorial Server

This is a Python Flask equivalent of the Node.js Express tutorial server.
It demonstrates the basics of Flask web framework with the same functionality
as the original Node.js implementation.
"""

# Import the Flask framework
from flask import Flask
import os

# Initialize the Flask application
app = Flask(__name__)

# Configure the server port (use environment variable or default to 3000)
PORT = int(os.environ.get('PORT', 3000))


# Define the root route that returns our hello message
# This demonstrates basic Flask routing with a simple text response
@app.route('/')
def hello():
    """Root endpoint returning 'Hello world'"""
    return 'Hello world'


# Define the evening route that returns a greeting message
# This shows how to add multiple endpoints to a Flask application
@app.route('/evening')
def evening():
    """Evening endpoint returning 'Good evening'"""
    return 'Good evening'


# Start the server and listen for incoming requests
# The debug mode is disabled for production-like behavior
if __name__ == '__main__':
    print(f'Server is running on http://localhost:{PORT}')
    app.run(host='0.0.0.0', port=PORT, debug=False)
