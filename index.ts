import express from "express";
import bodyParser from "body-parser";
import "./src/database/knex";
import Router from "./src/routes/router";
import { carsRepository } from "./src/repositories/cars.repository";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
