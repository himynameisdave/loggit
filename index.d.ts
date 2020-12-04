import type { BackgroundColor, ForegroundColor } from 'chalk';

//  src/log.ts
export type Log = (message: string, messageColor?: typeof ForegroundColor) => void;

//  Configuration for createLogger
export type CreateLoggerConfig = {
  taskColor?: typeof BackgroundColor;
  timeStampColor?: typeof ForegroundColor;
};

export type CreateLogger = (task: string, config: CreateLoggerConfig) => Log;
