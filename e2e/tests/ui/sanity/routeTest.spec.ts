import test from "playwright/test";

test("explore network", async ({ page }) => {
  // page.on("request",(request)=>{console.log(request.url())})
  // page.on("response",(response)=>{console.log(response.status())})
  // await page.route(/webp/,(route)=>{route.abort()})
  // await page.route("**/*",(route)=>{

  //     const headers={
  //         ...route.request().headers(),
  //         "newHeader":"newdemoHeader"
  //     }
  // route.continue({headers})
  // })

  await page.route("**/web/index.php/api/v2/dashboard/shortcuts", (route) => {
    route.fulfill({
      status: 200,
      json: {
        data: {
          "leave.assign_leave": false,
          "leave.leave_list": true,
          "leave.apply_leave": true,
          "leave.my_leave": true,
          "time.employee_timesheet": true,
          "time.my_timesheet": true,
        },
        meta: [],
        rels: [],
      },
    });
  });
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // await page.getByPlaceholder("Username").fill("Admin");
  // await page.getByPlaceholder("Password").fill("admin123");
  // await page.getByRole("button", { name: "Login" }).click();

  //   const responsePromise=page.waitForResponse(response=>
  //    response.url()=="https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts" && response.status()==200
  //   )
  //   const response=await responsePromise;
});
