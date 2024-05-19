import test from "@playwright/test";
import { Login } from "@e2e/pages/login";
import { ENV } from "@e2e/configs/env";

test("Create login State", async ({ page }) => {
  const filePath = "e2e/configs/authFiles/user.json";
  const login = new Login(page);
  await login.login(ENV.URL, ENV.EMPNAME, ENV.PASSWORD);
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: filePath });
});
