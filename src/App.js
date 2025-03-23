//archivo App.js
import React, { useState, useEffect } from 'react';
import logService from './logService.js';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        logService.info('C+omponente cargado');

        // Simulando un error de red
        const fetchData = async () => {
            try {
                logService.debug('Haciendo una solicitud...');
                // Imagina que aquí hay una solicitud a una API
                throw new Error('Error de red');
            } catch (error) {
                logService.error(`Error al obtener datos: ${error.message}`);
            }
        };

        fetchData();
    }, []);

    const handleClick = () => {
        logService.debug('Botón clickeado');
        setCount(count + 1);
        if (count === 5) {
            logService.warn('Contador alcanzó 5');
        }
    };

    return (
      <div>
          <h1>React y Logs</h1>
          <p>Contador: {count}</p>
          <button onClick={handleClick}>Incrementar</button>
      </div>
  );
};

export default App;