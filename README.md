## About the application
This express application tries to create a very simple Express application
that aligns with the MVC architecture. The main goal of the application is to
simply establish a connection with a MongoDB Database using the official Node.js
driver and have a server running only after a database connection has been established.

The function to connect to the database if found in the dbConnect.ts file. From this file
a connection to database function is exported and a database connection is also exported

This database connection is then imported inside the routes directory, and used to find
the documents in a collection. This ensures that a database connection is established only once.

The application works with a local MongoDB server but you can change the connection uri, 
database name and collection name and it should work on any MongoDB you're testing it on.


## Installation

The entry file is index.ts and after installing the needed dependecies, you
can start the application by simply executing -> npm start 

## Bug in the application
This application has a bug in the index.ts file. Ideally, the startServer() function
is supposed to make a database connection, then start the server to listen for requests
only after a database connection has been established.

The if() block inside the function is used to verify that the const database is not undefined,
which then confirms that the database connection has been successful.
In case the const database is undefined which confirm a failure in establishing a connection, 
an error should be thrown. 

However, when you run the application, the code inside the if() block is never executed.
I belive the error is in this line:

const database = await connectToDatabase();

I presume that since the code awaits for an asynchronous function, the if() block gets executed
before the promised gets resolved, thus const database is always undefined.

I would appreciate any help you might offer in resolving this error, even if it may involve a 
complete redo of the application to achieve the intende functionality