import chalk from 'chalk';
import getTaskBlock from '../getTaskBlock';

const mockColor = 'bgYellow';

jest.mock('chalk', () => ({
  bgCyanBright: (log: string): string => log,
  bgYellow: jest.fn(() => () => {}),
}));

describe('utils/getTaskBlock', () => {
  it('should convert the provided task to uppercase', () => {
    const task = 'hello world';
    const actual = getTaskBlock(task);
    expect(actual).toContain('HELLO WORLD');
  });
  it('should center the task in the block', () => {
    const task = 'fo';
    const actual = getTaskBlock(task);
    expect(actual).toContain('     FO     ');
  });
  it('should allow the consumer to customize the color', () => {
    getTaskBlock('foo bar', mockColor);
    expect(chalk.bgYellow).toHaveBeenCalledTimes(1);
  });
});
