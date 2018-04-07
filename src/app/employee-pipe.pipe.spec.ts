import { EmployeePipePipe } from './employee-pipe.pipe';

describe('EmployeePipePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeePipePipe();
    expect(pipe).toBeTruthy();
  });
});
