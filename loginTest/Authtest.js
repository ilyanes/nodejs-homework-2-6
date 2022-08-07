const request = require("supertest");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { DB_HOST, PORT } = process.env;

const Auth = require("./Auth");
const app = express();

const auth = new Auth();

describe("Authentification test", () => {
  app.use(cors());
  app.use(express.json());

  app.post("/api/users/signup", auth.register);
  let server;
  beforeAll(() =>
    mongoose.connect(DB_HOST).then(() => (server = app.listen(PORT)))
  );

  test("Signup test", async () => {
    const response = await request(app)
      .post("api/users/signup")
      .send({ email: "I_Kononenko@gmail.com", password: "12345678" });

    const { email, subscription } = response.body.data;
    expect(response.status).toBe(201);
    expect(typeof response.body).toBe("object");
    expect(typeof email).toBe("string");
    expect(typeof subscription).toBe("string");
  });
  afterAll(() => server.close());
});
