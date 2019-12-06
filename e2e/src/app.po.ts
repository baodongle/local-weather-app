import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getParagraphText(): Promise<string> {
    return element(by.css('app-root mat-toolbar span')).getText() as Promise<string>;
  }
}
