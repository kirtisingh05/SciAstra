import dotenv from "dotenv";
dotenv.config();
import db from "./database/db.js";
import { app } from "./app.js";

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
db.getConnection()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);  
        });
    })
    .catch((err) => {
        console.log(`Database connection failed : ${err}`);
    });

// app.listen(process.env.PORT || 8000, () => {
//     console.log(`⚙️ Server is running at port : ${process.env.PORT}`);  
// });

