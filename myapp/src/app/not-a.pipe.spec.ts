import { NotAPipe } from './not-a.pipe';

describe('NotAPipe', () => {
  it('create an instance', () => {
    const pipe = new NotAPipe();
    expect(pipe).toBeTruthy();
  });
});
