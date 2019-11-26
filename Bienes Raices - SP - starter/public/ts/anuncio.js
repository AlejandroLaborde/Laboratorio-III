"use strict";
var Etransaccion;
(function (Etransaccion) {
    Etransaccion[Etransaccion["alquiler"] = 0] = "alquiler";
    Etransaccion[Etransaccion["venta"] = 1] = "venta";
})(Etransaccion || (Etransaccion = {}));
var anuncio = /** @class */ (function () {
    function anuncio(transaccion) {
        this._transaccion = transaccion;
    }
    Object.defineProperty(anuncio.prototype, "transaccion", {
        get: function () {
            return this._transaccion;
        },
        set: function (value) {
            this._transaccion = value;
        },
        enumerable: true,
        configurable: true
    });
    return anuncio;
}());
