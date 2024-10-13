export default class Cl_mCliente {
  constructor({ cedula, denominacion, cantidad }) {
    this.cedula = cedula;
    this.denominacion = denominacion;
    this.cantidad = cantidad;
  }
  set cedula(ce) {
    this._cedula = +ce;
  }
  get cedula() {
    return this._cedula;
  }
  set denominacion(d) {
    this._denominacion = +d;
  }
  get denominacion() {
    return this._denominacion;
  }
  set cantidad(c) {
    this._cantidad = +c;
  }
  get cantidad() {
    return this._cantidad;
  }
  montoCliente() {
    return this.cantidad * this.denominacion;
  }
}