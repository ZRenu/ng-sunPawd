import { DictionaryMmtModule } from './dictionary-mmt.module';

describe('DictionaryMmtModule', () => {
  let dictionaryMmtModule: DictionaryMmtModule;

  beforeEach(() => {
    dictionaryMmtModule = new DictionaryMmtModule();
  });

  it('should create an instance', () => {
    expect(dictionaryMmtModule).toBeTruthy();
  });
});
