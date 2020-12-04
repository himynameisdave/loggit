import chalk from 'chalk';
import center from 'center-align';
import type { BackgroundColor, ChalkFunction } from 'chalk';
import { DEFAULT_TASK_BLOCK_WIDTH } from '../constants';

//  Check if a given string is an even number of characters.
function isEvenNumberChars(task: string): boolean {
  return task.length % 2 === 0;
}

//  "Normalizes" even and odd length tasks to always be odd.
function normalizeTaskName(task: string): string {
  return isEvenNumberChars(task)
    ? `${task} ` // Add an additonal space, so all task blocks are same width.
    : task;
}

/**
 * Generate a centered "block" (caused by chalk.BackgroundColor).
 *
 * @param {string} task - Given task label.
 * @param {chalk.BackgroundColor} [color] - Background color for the block.
 */
export default function getTaskBlock(task: string, color: typeof BackgroundColor = 'bgCyanBright'): string {
  const taskBGColor: ChalkFunction = chalk[color];
  const taskString = normalizeTaskName(task).toUpperCase();
  return taskBGColor(
    `${center(taskString, DEFAULT_TASK_BLOCK_WIDTH)}`,
  );
}
