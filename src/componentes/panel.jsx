import { useState, useEffect } from 'react';
import { colores } from "../lib/colores.js";
import { arrayCasillas } from "../lib/Cuadricula.js";
import Fantasma from "../lib/Fantasma.js";

const Panel = () => {
    // Estado para la posición del comecocos
    const [comecocosPos, setComecocosPos] = useState({ x: 10, y: 10 }); 
    // Estado para los fantasmas
    const [fantasmas, setFantasmas] = useState([]);
    useEffect(() => {
        // Crear 5 instancias de Fantasma y generar posiciones aleatorias
        const nuevosFantasmas = [];
        for (let i = 0; i < 5; i++) {
            const fantasma = new Fantasma();
            fantasma.generaPosicionAleatoria(arrayCasillas[0].length, arrayCasillas.length);
            nuevosFantasmas.push(fantasma);
        }
        setFantasmas(nuevosFantasmas);
    }, []);

    return (
        <div className="panel mt-5">
            {arrayCasillas.map((fila, filaIndex) => {
                return (
                    <div className="fila d-flex" key={filaIndex}>
                        {fila.map((casilla, casillaIndex) => {
                            // Verificar si la posición actual es la del comecocos o de un fantasma
                            const isComecocos = filaIndex === comecocosPos.y && casillaIndex === comecocosPos.x;
                            const isFantasma = fantasmas.some(fantasma => fantasma.x === casillaIndex && fantasma.y === filaIndex);
                            // Determinar el color de la celda, comecocos o fantasma
                            const colorClase = isComecocos ? colores(5) : isFantasma ? colores(4) : colores(casilla); 
                            return (
                                <div
                                    className={`celda ${colorClase} border border-dark`}
                                    key={casillaIndex}
                                    style={{ width: "30px", height: "30px" }}
                                >
                                    {isComecocos && 'C'} {/* Representación del comecocos */}
                                    {isFantasma && 'F'} {/* Representación del fantasma */}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Panel;