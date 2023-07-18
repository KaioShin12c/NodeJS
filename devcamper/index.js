const express = require("express");
const morgan = require("morgan");

const connectDb = require("./config/mongodb");
const dotenv = require("dotenv");

const authRoute = require("./routes/AuthRoute");
const usersRoute = require("./routes/UsersRoute");
const coursesRoute = require("./routes/CoursesRoute");
const reviewsRoute = require("./routes/ReviewsRoute");
const bootcampsRoute = require("./routes/BootcampsRoute");

const PORT = process.env.PORT || 3000;
const app = express();
// Load env
dotenv.config();
// Connect to database
connectDb();

// Dev logger middleware, only use in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/courses", coursesRoute);
app.use("/api/v1/reviews", reviewsRoute);
app.use("/api/v1/bootcamps", bootcampsRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
