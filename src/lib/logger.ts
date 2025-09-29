import { env } from '@/env';

// Check if we're in a server environment
const isServer = typeof window === 'undefined';

// Check if debug mode is enabled
const isDebugMode = () => {
  if (isServer) {
    return env.NEXT_PUBLIC_DEBUG;
  }
  
  return env.NEXT_PUBLIC_DEBUG || false;
};

// Simple logger with only console.log
class SimpleLogger {
  private formatMessage(level: string, message: string, meta?: any): string {
    const timestamp = new Date().toLocaleTimeString();
    let log = `${timestamp} [${level.toUpperCase()}] ${message}`;
    if (typeof meta === 'object') {
      log += `\n${JSON.stringify(meta, null, 2)}`;
    } else {
      log += ` ${meta}`;
    }
    return log;
  }

  error(message: string, meta?: any) {
    console.log(this.formatMessage('error', message, meta));
  }

  warn(message: string, meta?: any) {
    if (isDebugMode()) {
      console.log(this.formatMessage('warn', message, meta));
    }
  }

  info(message: string, meta?: any) {
    if (isDebugMode()) {
      console.log(this.formatMessage('info', message, meta));
    }
  }

  debug(message: string, meta?: any) {
    if (isDebugMode()) {
      console.log(this.formatMessage('debug', message, meta));
    }
  }

  verbose(message: string, meta?: any) {
    if (isDebugMode()) {
      console.log(this.formatMessage('verbose', message, meta));
    }
  }
}

// Create logger instance
const logger = new SimpleLogger();

// Export individual log methods for convenience
export const log = {
  error: (message: string, meta?: any) => logger.error(message, meta),
  warn: (message: string, meta?: any) => logger.warn(message, meta),
  info: (message: string, meta?: any) => logger.info(message, meta),
  debug: (message: string, meta?: any) => logger.debug(message, meta),
  verbose: (message: string, meta?: any) => logger.verbose(message, meta)
};

// Export logger status
export const getLoggerStatus = () => ({
  enabled: true,
  level: 'info',
  filePath: 'console only',
  environment: isServer ? 'server' : 'client',
  debugMode: isDebugMode(),
  consoleEnabled: true
});

// Export logger as default
export default logger;