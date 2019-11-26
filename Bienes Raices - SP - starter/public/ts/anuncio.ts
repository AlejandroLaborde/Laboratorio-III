
enum Etransaccion{
    alquiler,
    venta
}

class anuncio{

    private _transaccion: Etransaccion;

    public get transaccion(): Etransaccion {
        return this._transaccion;
    }
    public set transaccion(value: Etransaccion) {
        this._transaccion = value;
    }

    constructor(transaccion:Etransaccion){
        this._transaccion=transaccion;
    }

}