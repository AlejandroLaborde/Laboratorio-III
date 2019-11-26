"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bienRaiz = /** @class */ (function (_super) {
    __extends(bienRaiz, _super);
    function bienRaiz(titulo, transaccion, descripcion, precio, num_wc, num_esta, num_dormi, id) {
        var _this = _super.call(this, transaccion) || this;
        _this._titulo = titulo;
        _this._precio = precio;
        _this._descripcion = descripcion;
        if (id != null) {
            _this._id = id;
        }
        _this._num_dormitorio = num_dormi;
        _this._num_wc = num_wc;
        _this._num_estacionamiento = num_esta;
        return _this;
    }
    Object.defineProperty(bienRaiz.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "num_wc", {
        get: function () {
            return this._num_wc;
        },
        set: function (value) {
            this._num_wc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "num_estacionamiento", {
        get: function () {
            return this._num_estacionamiento;
        },
        set: function (value) {
            this._num_estacionamiento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "num_dormitorio", {
        get: function () {
            return this._num_dormitorio;
        },
        set: function (value) {
            this._num_dormitorio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "descripcion", {
        get: function () {
            return this._descripcion;
        },
        set: function (value) {
            this._descripcion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienRaiz.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: true,
        configurable: true
    });
    bienRaiz.prototype.devuelveAtributos = function () {
        var atributos = { id: "", titulo: "", transaccion: "", descripcion: "", precio: "", num_wc: "", num_estacionamiento: "", num_dormitorios: "" };
        return atributos;
    };
    return bienRaiz;
}(anuncio));
