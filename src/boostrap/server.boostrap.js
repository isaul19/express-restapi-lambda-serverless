import express from "express";

export class Server {
  #app = express();

  constructor() {
    this.#middlewares();
    this.#routes();
  }

  #routes() {
    this.#app.get("/hello", (req, res) => {
      res.status(200).json({
        message: "Hello",
      });
    });

    this.#app.use("*", (req, res) => {
      res.status(404).json({
        message: "Endpoint Not Found",
      });
    });
  }

  #middlewares() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
  }

  get application() {
    return this.#app;
  }
}
