import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3000;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/", async (req, res) => {
  let number = getRandomInt(1000);
  const respApi = await fetch("https://xkcd.com/" + number + "/info.0.json");
  const resp = await respApi.json();
  res.json(resp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
