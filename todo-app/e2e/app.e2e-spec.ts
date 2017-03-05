import { TodoAppPage } from './app.po';

describe('todo-app App', function() {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should display input box for adding todo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todos');
  });
});
