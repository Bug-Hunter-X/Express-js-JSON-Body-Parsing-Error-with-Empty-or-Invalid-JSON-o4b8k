# Express.js JSON Body Parsing Error

This repository demonstrates a common error encountered when working with JSON request bodies in Express.js applications. The problem arises when the request body is empty or contains invalid JSON data.

## Bug

The provided Express.js code snippet attempts to parse the JSON request body using `express.json()`. However, if the request body is empty or contains malformed JSON, the application will throw an error, leading to unexpected behavior or crashes.

## Solution

The solution involves adding error handling to gracefully handle cases where the request body is not valid JSON. This is achieved by using a `try...catch` block to wrap the JSON parsing process.

## How to reproduce the bug

1. Clone this repository.
2. Install the dependencies: `npm install`
3. Run the app: `node bug.js`
4. Send a POST request to `/user` with an empty or invalid JSON body.

## How to solve the bug

1. Replace `bug.js` with `bugSolution.js`
2. Run the app: `node bugSolution.js`
3. Send a POST request to `/user` with an empty or invalid JSON body.