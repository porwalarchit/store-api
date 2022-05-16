const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const productRouter = require("./routes/products")
require("dotenv").config();

const port = process.env.PORT || 3000;

// Product Route
app.use('/api/v1/products', productRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection to DB successful");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    } catch (error) {
        console.log(err);
    }
}
start();



