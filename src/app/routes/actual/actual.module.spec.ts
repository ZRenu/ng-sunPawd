import { ActualModule } from './actual.module';

describe('ActualModule', () => {
  let actualModule: ActualModule;

  beforeEach(() => {
    actualModule = new ActualModule();
  });

  it('should create an instance', () => {
    expect(actualModule).toBeTruthy();
  });
});
