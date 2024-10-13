import Cl_vInicioBodega  from "./Cl_vInicioBodega.js";
import Cl_vBodega        from "./Cl_vBodega.js";
import Cl_vCliente       from "./Cl_vCliente.js";
import Cl_mInicioBodega  from "./Cl_mInicioBodega.js";
import Cl_mBodega        from "./Cl_mBodega.js";
import Cl_mCliente       from "./Cl_mCliente.js";
export default class Cl_controlador {
  constructor() {
    this.mBodega =        new Cl_mBodega();
    this.vCliente =       new Cl_vCliente(this);
    this.vInicioBodega =  new Cl_vInicioBodega(this);
    this.vBodega =        new Cl_vBodega(this);
  }
  mostrarVistaCliente() {
    this.vBodega.ocultar();
    this.vInicioBodega.ocultar();
    this.vCliente.mostrar();
  }
  mostrarVistaInicioBodega() {
    this.vBodega.ocultar();
    this.vCliente.ocultar();
    this.vInicioBodega.mostrar();
  }
  mostrarVistaBodega() {
    this.vCliente.ocultar();
    this.vBodega.mostrar();
    this.vInicioBodega.ocultar();
  }
  agregarCliente({ cedula, denominacion, cantidad }) {
    let cliente = new Cl_mCliente({ cedula, denominacion, cantidad });
    this.mBodega.procesarCliente(cliente);
    this.vBodega.reportarCliente({
      cedula: cliente.cedula,
      denominacion: cliente.denominacion,
      cantidad: cliente.cantidad,
      montoCliente: cliente.montoCliente(),
      montoBillete10: this.mBodega.montoBillete10(),
      montoBillete20: this.mBodega.montoBillete20(),
      montoBillete50: this.mBodega.montoBillete50(),
      montoTotalBodega: this.mBodega.montoTotalBodega()
    });
    this.mostrarVistaBodega();
  }
  agregarInicializarBodega({ billete10, billete20, billete50 }) {
    let incBod = new Cl_mInicioBodega({ billete10, billete20, billete50 });
    this.mBodega.procesarInicializarBodega(incBod);
    this.vInicioBodega.reportarInicioBodega({
      billete10: incBod.billete10,
      billete20: incBod.billete20,
      billete50: incBod.billete50
    });
    this.mostrarVistaBodega();
  }
}