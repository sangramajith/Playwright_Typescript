import { test as base } from "@playwright/test";
import { EmployeePage } from "@e2e/pages/employee";
import { HomePage } from "@e2e/pages/homePage";

interface pageFixtures {
  employee: EmployeePage;
  homePage: HomePage;
}
export const test = base.extend<pageFixtures>({
  employee: async ({ page }, use) => {
    const employeePage = new EmployeePage(page);
    await use(employeePage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});
