import { EnvironmentModule } from './environment.module';

describe('EnvironmentModule', () => {
  let environmentModule: EnvironmentModule;

  beforeEach(() => {
    environmentModule = new EnvironmentModule();
  });

  it('should create an instance', () => {
    expect(environmentModule).toBeTruthy();
  });
});
