const request = require("supertest");
const app = require("../app");


describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

describe("Test the bonjour path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/bonjour")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("It should response to inconnu", () => {
        return request(app)
          .get("/bonjour")
          .then(response => {
            expect(response.text).toContain("Bienvenue à toi inconnu");
          });
      });
    test("It should response to Mathis", () => {
        return request(app)
        .get("/bonjour/Mathis")
        .then(response => {
            expect(response.text).toContain("Bienvenue à toi Mathis");
        });
    });
    test("It not should response to Mathis", () => {
        return request(app)
        .get("/bonjour/Halil-Can")
        .then(response => {
            expect(response.text).not.toContain("Bienvenue à toi Mathis");
            
        });
    });
});
