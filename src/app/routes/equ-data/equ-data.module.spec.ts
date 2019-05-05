import { EquDataModule } from './equ-data.module';

describe('EquDataModule', () => {
  let equDataModule: EquDataModule;

  beforeEach(() => {
    equDataModule = new EquDataModule();
  });

  it('should create an instance', () => {
    expect(equDataModule).toBeTruthy();
  });
});
