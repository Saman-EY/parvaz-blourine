export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose'
}

export enum LogOutput {
  CONSOLE = 'console',
  FILE = 'file',
  BOTH = 'both'
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: string;
  data?: any;
  stack?: string;
}

export interface LoggerConfig {
  level: LogLevel;
  output: LogOutput;
  filePath?: string;
  maxFileSize?: number; // in bytes
  maxFiles?: number;
  enableConsoleColors?: boolean;
  enableTimestamp?: boolean;
  enableStack?: boolean;
  dateFormat?: string;
}

export interface Logger {
  error(message: string, data?: any, context?: string): void;
  warn(message: string, data?: any, context?: string): void;
  info(message: string, data?: any, context?: string): void;
  debug(message: string, data?: any, context?: string): void;
  verbose(message: string, data?: any, context?: string): void;
  log(level: LogLevel, message: string, data?: any, context?: string): void;
}
