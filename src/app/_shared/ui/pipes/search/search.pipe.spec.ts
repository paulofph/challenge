import { SearchPipe } from './search.pipe';
import { App } from '../../../../models/app.model';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();
  
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

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters apps by name with search text app1', () => {
    expect(pipe.transform(appsArray, 'app1').length).toBe(1);
  });

  it('filters apps by name with search text app', () => {
    expect(pipe.transform(appsArray, 'app').length).toBe(2);
  });


});
