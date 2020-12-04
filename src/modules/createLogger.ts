import log from './log';
import getTaskBlock from '../utils/getTaskBlock';
import getTimestamp from '../utils/getTimestamp';
import { DEFAULT_CREATE_LOGGER_CONFIG } from '../constants';
import type { ForegroundColor, BackgroundColor } from 'chalk';
import type { CreateLoggerConfig, Log } from '../../index.d';

/**
 * Inject with a task (and optionally a color for that task), returns a logger function.
 *
 * @param {string} task - Name of the task (TASK_BLOCK_WIDTH = 20).
 * @param {CreateLoggerConfig} [config] - Config object for
 */
export default function createLogger(task: string, config: CreateLoggerConfig = DEFAULT_CREATE_LOGGER_CONFIG): Log {
  const taskBlock = getTaskBlock(task, config.taskColor as typeof BackgroundColor);
  return function loggit(message: string, messageColor: typeof ForegroundColor): void {
    log([
      //  Setup timestamp
      getTimestamp(),
      taskBlock,
      message,
    ].join(''), messageColor);
  };
}
