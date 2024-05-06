import { expect } from "@playwright/test";
import test from "playwright/test";

test("apiTest", async ({ request }) => {
  const resp = await request.get("https://reqres.in/api/users?page=2");
  console.log(await resp.json());

  const add = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus",
      job: "leader",
    },
  });

  expect(add.status()).toBe(201);
});
