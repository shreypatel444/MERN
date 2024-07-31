const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const connection = require("./utils/db");
const errorMiddleware = require("./middleware/error_middleware")

const corOptions = {
  origin : "http://localhost:5173",
  methods : "POST, GET, PUT, PATCH, DELETE,HEAD",
  credentials : true
}

app.use(cors(corOptions));

app.use(express.json())

const authRouter = require("./router/auth_router");
app.use("/", authRouter);

const adminRouter = require("./router/admin_router");
app.use("/admin",adminRouter);


app.use(errorMiddleware);

connection().then(() => {
  app.listen(port, () => {
    console.log(`You are listening on port ${port}...`);
  });
});
