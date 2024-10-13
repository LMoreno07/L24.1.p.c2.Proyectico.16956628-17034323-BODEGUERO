export default class Cl_vBodega {
  constructor(controlador) {
    this.vista =               document.getElementById("mainForm");
    this.tabla =               document.getElementById("mainForm_tabla");
    this.lblMontoBillete10 =   document.getElementById("mainForm_lblMontoBillete10");
    this.lblMontoBillete20 =   document.getElementById("mainForm_lblMontoBillete20");
    this.lblMontoBillete50 =   document.getElementById("mainForm_lblMontoBillete50");
    this.lblMontoTotalBodega = document.getElementById("mainForm_lblMontoTotalBodega");
    this.btAgregar =           document.getElementById("mainForm_btAgregar");
    this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarCliente({
    cedula,
    denominacion,
    cantidad,
    montoCliente,
    montoBillete10,
    montoBillete20,
    montoBillete50,
    montoTotalBodega
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${cedula}</td>
      <td>${denominacion}</td>
      <td>${cantidad}</td>
      <td>${montoCliente}</td>
    </tr>`;
    this.lblMontoTotalBodega.innerHTML = montoTotalBodega;
    this.lblMontoBillete10.innerHTML = montoBillete10;
    this.lblMontoBillete20.innerHTML = montoBillete20;
    this.lblMontoBillete50.innerHTML = montoBillete50;
  }
}
