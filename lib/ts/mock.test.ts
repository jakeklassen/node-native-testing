import * as assert from "node:assert";
import { describe, test } from "node:test";

class GithubService {
  async getUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    return user;
  }
}

describe("mocking", () => {
  test("mocks a class method", async (t) => {
    const githubServiceMock = new GithubService();

    const mockGetUser = t.mock.method(githubServiceMock, "getUser");

    mockGetUser.mock.mockImplementation(() => {
      return Promise.resolve({
        login: "test",
        id: 123,
        name: "Test User",
      });
    });

    const user = {
      login: "test",
      id: 123,
      name: "Test User",
    };

    const result = await githubServiceMock.getUser("test");

    assert.deepStrictEqual(result, user);
    assert.equal(mockGetUser.mock.calls.length, 1);
  });

  test("spies on an object method", (t) => {
    const number = {
      value: 5,

      add(num: number) {
        return this.value + num;
      },
    };

    const addMock = t.mock.method(number, "add");
    assert.strictEqual(addMock.mock.calls.length, 0);
    assert.strictEqual(number.add(3), 8);
    assert.strictEqual(addMock.mock.calls.length, 1);

    const call = addMock.mock.calls[0];

    assert.deepStrictEqual(call.arguments, [3]);
    assert.strictEqual(call.result, 8);
    assert.strictEqual(call.target, undefined);
    assert.strictEqual(call.this, number);
  });
});
