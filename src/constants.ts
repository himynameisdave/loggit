import type { Color } from 'chalk';
import type { CreateLoggerConfig } from '.';

export const DEFAULT_TIMESTAMP_COLOR: typeof Color = 'cyanBright';

export const DEFAULT_TASK_BLOCK_WIDTH = 14;

export const DEFAULT_CREATE_LOGGER_CONFIG: CreateLoggerConfig = {
  taskColor: 'bgCyanBright',
  timestampColor: DEFAULT_TIMESTAMP_COLOR,
};
