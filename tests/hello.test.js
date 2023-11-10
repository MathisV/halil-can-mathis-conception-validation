const request = require("supertest");
const app = require("../app");


describe("Test the hello path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/bonjour")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("It should response Hello World", () => {
        return request(app)
          .get("/hello")
          .then(response => {
            expect(response.text).toContain("Hello World");
          });
      });
});
