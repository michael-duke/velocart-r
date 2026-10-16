import express from "express";
import cors from "cors";
import products from "../src/data/product.json" with { type: "json" };

const app = express();

// Allow request from frontend
app.use(cors());
const port = 3000;

app.get("/api/v1/products", (_, res) => {
  console.log("Load velocart products");
  res.json(products);
});

app.listen(port, () =>
  console.log(`Velocart Server running at http://localhost:${port} `),
);
