import { expect } from "playwright/test";
import { ENV } from "@e2e/configs/env";
import { employeeData } from "e2e/data/employeeDetails";
import { test } from "@e2e/fixtures/customFixture";
test("Add a new Employee", async ({ page, employee, homePage }) => {
  await page.goto(ENV.URL as string);
  await homePage.getLeftMenuComponent().clickMenuItem("PIM");
  await homePage.getTopMenuComponent().clickMenuItem("add");

  await employee.fillFirstName(employeeData.FirstName);

  await employee.fillMiddleName(employeeData.MiddleName);
  await employee.fillLastName(employeeData.LastName);
  await employee.fillEmployeeId(4, employeeData.EmployeeId);
  await employee.clickSaveButton();

  await expect(await employee.getsuccessMesssage()).toBeVisible();
});
