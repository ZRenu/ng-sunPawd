import { EquInfoModule } from './equ-info.module';

describe('EquInfoModule', () => {
  let equInfoModule: EquInfoModule;

  beforeEach(() => {
    equInfoModule = new EquInfoModule();
  });

  it('should create an instance', () => {
    expect(equInfoModule).toBeTruthy();
  });
});
