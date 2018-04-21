import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  const pipe = new PricePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns Free when price is 0', () => {
    expect(pipe.transform(0)).toBe('Free')
  })

  it('returns 3 when price is 3', () => {
    expect(pipe.transform(3)).toBe('3')
  })
});
