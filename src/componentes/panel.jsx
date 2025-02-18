import { useState } from 'react';
import { colores } from "../lib/colores.js";
import { arrayCasillas } from "../lib/Cuadricula.js";

const Panel = () => {
    // Estado para la posición del comecocos
    const [comecocosPos, setComecocosPos] = useState({ x: 10, y: 10}); // Posición inicial en el centro

    return (
        <div className="panel mt-5">
            {arrayCasillas.map((fila, filaIndex) => {
                return (
                    <div className="fila d-flex" key={filaIndex}>
                        {fila.map((casilla, casillaIndex) => {
                            
                            const isComecocos = filaIndex === comecocosPos.y && casillaIndex === comecocosPos.x;
                            return (
                                <div
                                    className={`celda ${colores(casilla)} border border-dark ${isComecocos ? 'bg-warning' : ''}`}
                                    key={casillaIndex}
                                    style={{ width: "30px", height: "30px" }}
                                >
                                    {isComecocos && '3'} {/* Si es el comecocos, mostrar el número 3 */}
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