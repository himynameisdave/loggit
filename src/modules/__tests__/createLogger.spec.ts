import chalk from 'chalk';
import createLogger from '../createLogger';

const mockTaskColor = 'bgMagenta';
const mockTimestampColor = 'magenta';

jest.mock('chalk', () => ({
  bgCyanBright: (log: string): string => log,
  cyanBright: (log: string): string => log,
  whiteBright: (log: string): string => log,
  bgMagenta: jest.fn(() => () => {}),
  magenta: jest.fn(() => () => {}),
}));

describe('modules/createLogger', () => {
  it('should return a log function', () => {
    const spy = jest.spyOn(global.console, 'log').mockImplementation();
    const myLog = createLogger('my task');
    myLog('message');
    expect(console.log).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
  it('should log with the correct info', () => {
    const mockDate = new Date(1607049062407); // 12/4/2020, 2:31:02 AM
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as unknown as string);
    const spy = jest.spyOn(global.console, 'log').mockImplementation();

    const task = '     TASK     ';
    const message = 'hello!';
    const myLog = createLogger('tAsK');
    const timestamp = '[12/4/2020, 2:31:02 AM]';
    myLog('hello!');
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`${timestamp}${task}${message}`);
    spy.mockRestore();
  });
  it('should allow the user to customize the colors', () => {
    jest.spyOn(global.console, 'log').mockImplementation();
    const myLog = createLogger('tAsK', {
      taskColor: mockTaskColor,
      timeStampColor: mockTimestampColor,
    });
    myLog('some message');
    expect(chalk[mockTaskColor]).toHaveBeenCalledTimes(1);
    expect(chalk[mockTimestampColor]).toHaveBeenCalledTimes(1);
  });
});
