export default class Cl_vInicioBodega {
    constructor(controlador) {
      this.vista =          document.getElementById("inicioBodegaForm");
      this.inBillete10 =    document.getElementById("inicioBodegaForm_inBillete10");
      this.inBillete20 =    document.getElementById("inicioBodegaForm_inBillete20");
      this.inBillete50 =    document.getElementById("inicioBodegaForm_inBillete50");
      this.lblinBillete10 = document.getElementById("inicioBodegaForm_lblinBillete10");
      this.lblinBillete20 = document.getElementById("inicioBodegaForm_lblinBillete20");
      this.lblinBillete50 = document.getElementById("inicioBodegaForm_lblinBillete50");
      this.btAceptar =      document.getElementById("inicioBodegaForm_btAceptar");
      this.btAceptar.onclick = () => 
        controlador.agregarInicializarBodega({
          billete10: this.inBillete10.value,
          billete20: this.inBillete20.value,
          billete50: this.inBillete50.value
        });
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
    reportarInicioBodega({
      billete10,
      billete20,
      billete50
    }) {
      this.lblinBillete10.innerHTML = billete10;
      this.lblinBillete20.innerHTML = billete20;
      this.lblinBillete50.innerHTML = billete50;
    }
  }