import express, { Router } from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

const api = Router();
app.use("/api", api);

const images = Router();
api.use("/images", images);
images.use(express.static(path.join(__dirname, "../images")));

api.get("/exercises", (_, res) =>
  res.sendFile(path.join(__dirname, "../exercises.json"))
);

app.get("/r/:itemId", (req, res) => {
  const { itemId } = req.params;
  res.redirect("vincera://" + itemId);
});

app.post("/", (req, res) => {
  const { split, workout, day } = req.body;
  if (split !== undefined) {
  } else if (workout !== undefined) {
  } else if (day !== undefined) {
  }
  res.sendStatus(400);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

module.exports = app;
