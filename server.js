const dotenv = require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectDb");
const app = express();
const cors = require("cors");
const taskRoutes = require("./routes/task.route");

const PORT = process.env.PORT || 5000;

// routers

app.get("/", (req, res) => {
  res.send("hello brother");
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//about my routes
app.use("/api/tasks", taskRoutes);


const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {}
};

startServer();
