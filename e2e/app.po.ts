export class TodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-app h1')).getText();
  }
}
