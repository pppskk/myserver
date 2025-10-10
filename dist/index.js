"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Express = require("express");
const Express = require("express");
// import UserRoutes from './UserRoutes';
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = Express();
// const mongoURI = "mongodb+srv://namthipm_db_user:test1234@cluster0.bpjk6m7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));
app.use(Express.json());
app.use((0, cors_1.default)());
app.use(Express.static(path_1.default.join(__dirname, 'public')));
// app.use("/api",UserRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World11111!");
});
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
// app.listen(80, () => {
//   console.log("Server is running on http://localhost:80");
// });
