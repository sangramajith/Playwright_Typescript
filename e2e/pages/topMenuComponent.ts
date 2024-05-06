import { Page } from "@playwright/test";

class TopMenuComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  private readonly menu = async (menuItem: string) =>
    this.page.getByRole("link", { name: menuItem });

  async clickMenuItem(itemToClick: string) {
    (await this.menu(itemToClick)).click();
  }
}
export { TopMenuComponent };
