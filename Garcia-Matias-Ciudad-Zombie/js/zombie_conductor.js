/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, direccion) {
    /* Completar constructor a partir de Enemigo */
    this.direccion = direccion;
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad);
    /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {

    if (this.direccion == "v") {
        this.y += this.velocidad;

    } else if (this.direccion == "h") {
        this.x += this.velocidad;
    }

    if (this.x >= 960) {
        this.x = 0;
    }

    if (this.y >= 500) {
        this.y = 0;
    }
}
ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(5);
}