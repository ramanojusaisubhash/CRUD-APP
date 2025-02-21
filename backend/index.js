const express = require("express")
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://subhash:sai777@cluster0.d3zfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

const server = app.listen(2000,
    () => console.log('server is loading..http://localhost:%s/User', server.address().port)
)