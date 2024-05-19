import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
if (process.env.ENVIRONMENT) {
  dotenv.config({ path: "e2e/configs/.env." + process.env.ENVIRONMENT });
} else {
  dotenv.config({ path: "e2e/configs/.env" });
}
export default defineConfig({
  testDir: "./e2e/tests/",
  /* Run tests in files in parallel */
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 2,
  reporter: "html",
  timeout: 30000 * 2,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true,
    screenshot: "only-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      //testMatch: "./e2e/tests/ui/setup/auth.spec.ts",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./e2e/tests/ui/setup/",
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chromium"] },
      testDir: "./e2e/tests/ui/smoke/",
    },

    {
      name: "skipLoginTest",
      use: {
        ...devices["Desktop Firefox"],
        storageState: "./e2e/configs/authFiles/user.json",
      },
      dependencies: ["setup"],
      testDir: "./e2e/tests/ui/sanity",
    },
    {
      name: "ApiTest",
      testDir: "./e2e/tests/api/",
    },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
