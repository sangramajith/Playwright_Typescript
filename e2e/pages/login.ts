import { Locator, Page } from "@playwright/test";

export class Login {
  constructor(private page: Page) {
    this.page = page;
  }
  private userName: Locator = this.page.getByPlaceholder("Username");
  private password: Locator = this.page.getByPlaceholder("Password");
  private loginButton: Locator = this.page.getByRole("button", {
    name: "Login",
  });

  async login(url: string, username: string, password: string) {
    await this.page.goto(url as string);
    await this.userName.fill(username as string);
    await this.password.fill(password as string);
    await this.loginButton.click();
  }
}
