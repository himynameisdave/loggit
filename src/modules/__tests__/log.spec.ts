import chalk from 'chalk';
import log from '../log';

jest.mock('chalk', () => ({
  whiteBright: (log: string): string => log,
  green: jest.fn(() => () => {}),
}));

describe('modules/log', () => {
  it('should log to the console', () => {
    jest.spyOn(global.console, 'log').mockImplementation();
    const message = 'hello world';
    log(message);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(message);
  });
  it('should allow the consumer to customize the color', () => {
    const message = 'hello world';
    log(message, 'green');
    expect(chalk.green).toHaveBeenCalledTimes(1);
    expect(chalk.green).toHaveBeenCalledWith(message);
  });
});
