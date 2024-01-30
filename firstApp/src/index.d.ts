// import express from "express";
// import { connectToDatabase } from './models/dbConnection.ts';
// import { router } from './routes/subscribers.ts';

// const port = process.env.PORT || 5050;
// const app = express();

// app.use('/', router);


// // problem function. app.listen() is never executed because when the
// // if statement is evaluated, it is alway undefined and the error below it
// // get thrown
// const startServer = async() => {
//   try {
//     const database = await connectToDatabase();
//     if(database) { // Type guard to ensure const database is not undefined, thus succesful connection
//       console.log("Database connection was successful")
//       app.listen(port, () => {
//         console.log(`SERVER LISTENING ON PORT ${port}`);
//       })
//     }
//     throw new Error("Database connection failed: Server not started");
//   } catch(error: any) {
//     console.error(error.message)
//     console.error(error)
//   }
// }

// startServer()