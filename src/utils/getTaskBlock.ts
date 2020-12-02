import chalk, { BackgroundColor, ChalkFunction } from 'chalk';
import center from 'center-align';
import { DEFAULT_TASK_BLOCK_WIDTH } from '../constants';


/**
 * Generate a centered "block" (caused by chalk.BackgroundColor).
 *
 * @param {string} task - Given task label.
 * @param {chalk.BackgroundColor} color - Background color for the block.
 */
export default function getTaskBlock(task: string, color: typeof BackgroundColor): string {
  const taskBGColor: ChalkFunction = chalk[color];
  return taskBGColor(
    `${center(task.toUpperCase(), DEFAULT_TASK_BLOCK_WIDTH)}`,
  );
}
