const express = require("express")
const app = express();
const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGO_URI;

const cors = require("cors");
app.use(cors());

const  useRoute = require("./routes/userRoute");

app.use(express.json())

mongoose.connect(url).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.log("Error:", error);
});

app.use('/User',useRoute);

const PORT = process.env.PORT || 2000;
const server = app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}/User`)
);
