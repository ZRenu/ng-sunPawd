import { SystemMmtModule } from './system-mmt.module';

describe('SystemMmtModule', () => {
  let systemMmtModule: SystemMmtModule;

  beforeEach(() => {
    systemMmtModule = new SystemMmtModule();
  });

  it('should create an instance', () => {
    expect(systemMmtModule).toBeTruthy();
  });
});
