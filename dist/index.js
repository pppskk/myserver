"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Express = require("express");
const Express = require("express");
// import mongoose from 'mongoose';
// import UserRoutes from './UserRoutes';
// import path from 'path';
// import cors from 'cors';
const app = Express();
// const mongoURI = "mongodb+srv://namthipm_db_user:test1234@cluster0.bpjk6m7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));
// app.use(Express.json());
// app.use(cors());
// app.use(Express.static(path.join(__dirname, 'public')));
// app.use("/api",UserRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World11111!");
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
