export default class Cl_mBodega {
  constructor() {
    this.acMontoTotal = 0;
    this.acBillete10 = 0;
    this.acBillete20 = 0;
    this.acBillete50 = 0;
  }
  procesarInicializarBodega(incBod){
    this.acBillete10 = incBod.billete10;
    this.acBillete20 = incBod.billete20;
    this.acBillete50 = incBod.billete50;
  }
  procesarCliente(cliente) {
    if (cliente.denominacion === 10 ) 
      this.acBillete10 += cliente.cantidad;
    if (cliente.denominacion === 20 ) 
      this.acBillete20 += cliente.cantidad;
    if (cliente.denominacion === 50 ) 
      this.acBillete50 += cliente.cantidad;
  }
  montoTotalBodega() {
    return this.montoBillete10()+this.montoBillete20()+this.montoBillete50();
  }
  montoBillete10() {
    return this.acBillete10*10;
  }
  montoBillete20() {
    return this.acBillete20*20;
  }
  montoBillete50() {
    return this.acBillete50*50;
  }
}
