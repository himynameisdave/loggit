import type { BackgroundColor, ForegroundColor } from 'chalk';

export type Log = (message: string, messageColor?: typeof ForegroundColor) => void;

export type CreateLoggerConfig = {
  taskColor?: typeof BackgroundColor;
  timestampColor?: typeof ForegroundColor;
};

export type CreateLogger = (task: string, config: CreateLoggerConfig) => Log;

export { default as createLogger } from './modules/createLogger';
export { default as log } from './modules/log';
