import chalk from 'chalk';
import type { ForegroundColor } from 'chalk';

/**
 * Logs something to the console, with optional ForegroundColor.
 *
 * @param {string} message - String to be logged to the console.
 * @param {chalk.ForegroundColor} [messageColor] - A ForegroundColor.
 */
export default function log(message: string, messageColor: typeof ForegroundColor = 'whiteBright'): void {
  console.log(chalk[messageColor](message));
}
