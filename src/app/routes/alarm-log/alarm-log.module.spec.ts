import { AlarmLogModule } from './alarm-log.module';

describe('AlarmLogModule', () => {
  let alarmLogModule: AlarmLogModule;

  beforeEach(() => {
    alarmLogModule = new AlarmLogModule();
  });

  it('should create an instance', () => {
    expect(alarmLogModule).toBeTruthy();
  });
});
