# Express API

## How to run

By nodemon:

    npm run watch

Or

    npm start

# Endpoints

## localhost:5000/todo

- / => GET => fetch all documents
- /create => POST => create new todo document
- /delete/\${id} => DELETE => delete document by ID
- /update/\${id} => PUT => Modify document by ID

## Schema

    title: {
    	type: String,
    	required: true
    },
    description: {
    	type: String,
    	required: true
    },
    endDate: {
    	type: Date,
    	required: false
    },
    status: {
    	type: String,
    	enum: ['complete', 'in progress', 'dropped'],
    	required: true
    }
