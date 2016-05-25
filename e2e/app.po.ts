export class RodolphPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rodolph-app h1')).getText();
  }
}
