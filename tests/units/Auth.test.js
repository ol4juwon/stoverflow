const { before, after } = require("lodash");
const request = require("supertest");
let user;

/**
 * @jest-environment node
 */
describe("User Repository test", () => {
  beforeEach( () => {});
  afterEach( () => {});
  /**
   * @jest-environment node
   */
  it("search by email should return a valid user", () => {
    let email = "client@client.com";
    userRepository.findOne({ email }).then((user) => {});
  });
});
