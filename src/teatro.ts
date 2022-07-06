import { Localidad } from './modelos/localidad';
export class Teatro {
  localidades: Localidad[];

  constructor() {
    this.localidades = [];

    for (let i=0; i<10; i++) {
     this.localidades.push({
      columna: i,
      fila: 0,
      estaOcupada: false,
      nombreReserva: undefined,
      edadReserva: undefined,
      telefonoReserva: undefined
     });       
    }
  }

  verProgramacionActual() {
    console.log("Hoy representamos La cena de los idiotas");
    console.log("En C/Sol 45, local de 300 metros, con 2 accesos");
    console.log("Precio: 30.0");
  }
  
}
