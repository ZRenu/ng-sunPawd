import { RourtesModule } from './rourtes.module';

describe('RourtesModule', () => {
  let rourtesModule: RourtesModule;

  beforeEach(() => {
    rourtesModule = new RourtesModule();
  });

  it('should create an instance', () => {
    expect(rourtesModule).toBeTruthy();
  });
});
