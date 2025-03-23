//logService.js
import log from 'loglevel';

// Establecer el nivel de log. Esto puede ser: trace, debug, info, warn, error, silent
log.setLevel('debug');  // Cambia a 'info' o 'warn' cuando quieras menos detalles.

const logService = {
    trace: (message) => log.trace(message),
    debug: (message) => log.debug(message),
    info: (message) => log.info(message),
    warn: (message) => log.warn(message),
    error: (message) => log.error(message),
};

export default logService;