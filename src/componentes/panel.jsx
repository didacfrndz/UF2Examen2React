import { colores } from "../lib/colores.js";
import { arrayCasillas } from "../lib/Cuadricula.js";

const Panel = () => {
    return (
        <div className="panel mt-5">
            {arrayCasillas.map((fila, filaIndex) => {
                return (
                    <div className="fila d-flex" key={filaIndex}>
                        {fila.map((casilla, casillaIndex) => {
                            return (
                                <div className={`celda ${colores(casilla)} border border-dark`} key={casillaIndex} style={{ width: "30px", height: "30px" }}></div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Panel;