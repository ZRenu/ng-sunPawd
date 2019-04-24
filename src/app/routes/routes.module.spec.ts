import { RoutesModule } from './routes.module';

describe('RourtesModule', () => {
  let rourtesModule: RoutesModule;

  beforeEach(() => {
    rourtesModule = new RoutesModule();
  });

  it('should create an instance', () => {
    expect(rourtesModule).toBeTruthy();
  });
});
