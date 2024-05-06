import { Page } from "@playwright/test";
import { LeftMenuComponent } from "./leftMenuComponent";
import { TopMenuComponent } from "./topMenuComponent";

class HomePage {
  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;
  constructor(private page: Page) {
    this.page = page;
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  getLeftMenuComponent() {
    return this.leftMenuComponent;
  }
  getTopMenuComponent() {
    return this.topMenuComponent;
  }
}
export { HomePage };
