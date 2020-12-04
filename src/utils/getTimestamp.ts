import chalk from 'chalk';
import type { Color } from 'chalk';
import { DEFAULT_TIMESTAMP_COLOR } from '../constants';

/**
 * Generate our timestamp block, like: `[12/1/2020, 10:41:01 AM]`
 */
export default function getTimestamp(color: typeof Color = DEFAULT_TIMESTAMP_COLOR): string {
  const timestamp = (new Date()).toLocaleString();
  return chalk[color](`[${timestamp}]`);
}
