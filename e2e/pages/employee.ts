import { Page, Locator } from "@playwright/test";

export class EmployeePage {
  private readonly page: Page;
  private readonly pimLink: Locator;
  private readonly addButton: Locator;
  private readonly firstNameInput: Locator;
  private readonly middleNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly saveButton: Locator;
  private readonly locatorTextbox: Locator;
  private readonly successMesssage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.pimLink = this.page.getByRole("link", { name: "PIM" });
    this.addButton = this.page.getByRole("button", { name: "Add" });
    this.firstNameInput = this.page.getByPlaceholder("First Name");
    this.middleNameInput = this.page.getByPlaceholder("Middle Name");
    this.lastNameInput = this.page.getByPlaceholder("Last Name");
    this.saveButton = this.page.getByRole("button", { name: "Save" });
    this.locatorTextbox = this.page.locator("form").getByRole("textbox");
    this.successMesssage = page.getByText("Successfully Saved").nth(0);
  }

  async clickPIMLink(): Promise<void> {
    console.log("HomePage");
    await this.pimLink.click();
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async fillFirstName(value: string): Promise<void> {
    await this.firstNameInput.click();
    await this.firstNameInput.fill(value);
  }

  async fillMiddleName(value: string): Promise<void> {
    await this.middleNameInput.click();
    await this.middleNameInput.fill(value);
  }

  async fillLastName(value: string): Promise<void> {
    await this.lastNameInput.click();
    await this.lastNameInput.fill(value);
  }

  async clickSaveButton(): Promise<void> {
    await this.saveButton.click();
  }

  async fillEmployeeId(index: number, value: string): Promise<void> {
    const textbox = this.locatorTextbox.nth(index);
    await textbox.click();
    await textbox.fill(value);
  }
  async getsuccessMesssage(): Promise<Locator> {
    return this.successMesssage;
  }
}
