class Fantasma {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.estado = 'vivo';
    }

    generaPosicionAleatoria(maxX, maxY) {
        this.x = Math.floor(Math.random() * (maxX - 2)) + 1;
        this.y = Math.floor(Math.random() * (maxY - 2)) + 1;
    }
}

export default Fantasma;