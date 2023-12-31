import express, { Response } from "express";
import path from "path";
import cors from "cors";
const app = express();
let count = 0;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "dist/client")));
app.get("/", (req, res) => {
  const options = {
    root: path.join(process.cwd(), "dist/client"),
  };
  res.sendFile("index.html", options);
  res.sendStatus(200);
});
app.get("/api/getCount", (req, res) => {
  res.send({ count }).status(200);
});
app.post("/api/updateCount", (req, res) => {
  const counter = req.body;
  console.log(counter);
  count = counter.count;
});
app.listen(3001, () => {
  console.log("listening at 3001");
});
