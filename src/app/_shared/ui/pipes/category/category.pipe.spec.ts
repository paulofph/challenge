import { CategoryPipe } from './category.pipe';
import { App } from '../../../../models/app.model';

let pipe = new CategoryPipe();
const appsArray: App[] = [
  {
    id: "1",
    name: "app1",
    description: "desc1",
    categories: ["Channels", "Productivity"],
    subscriptions:[],
    sumOfSubsPrices: 1
  },
  {
    id: "2",
    name: "app2",
    description: "desc1",
    categories: ["Reporting"],
    subscriptions:[],
    sumOfSubsPrices: 1
  }
];

describe('CategoryPipe', () => {
  const pipe = new CategoryPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters apps by category Channels', () => {
    expect(pipe.transform(appsArray, 'Channels').length).toBe(1);
  });

  it('filters apps by category All', () => {
    expect(pipe.transform(appsArray, 'All').length).toBe(2);
  });

});
