import Tabs from '../src/js/modules/main/tabs';

it(('azaz'), () => {
  const tabs = new Tabs();
  expect(tabs.tabButton1).toEqual(null);
});