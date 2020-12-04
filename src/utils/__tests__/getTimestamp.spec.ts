import chalk from 'chalk';
import getTimestamp from '../getTimestamp';


jest.mock('chalk', () => ({
  cyanBright: (log: string): string => log,
  yellow: jest.fn(() => () => {}),
}));

describe('utils/getTimestamp', () => {
  beforeEach(() => {
    const mockDate = new Date(1607049062407); // 12/3/2020, 6:31:02 PM
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as unknown as string);
  });
  it('should return the correct Date.toLocaleString, wrapped in brackets', () => {
    const expected = '[12/3/2020, 6:31:02 PM]';
    const actual = getTimestamp();
    expect(actual).toContain(expected);
  });
  it('should allow the consumer to customize the color', () => {
    getTimestamp('yellow');
    expect(chalk.yellow).toHaveBeenCalledTimes(1);
  });
});
