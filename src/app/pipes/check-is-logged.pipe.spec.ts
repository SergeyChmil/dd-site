import { CheckIsLoggedPipe } from './check-is-logged.pipe';

describe('CheckIsLoggedPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckIsLoggedPipe();
    expect(pipe).toBeTruthy();
  });
});
