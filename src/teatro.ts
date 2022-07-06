import { Localidad } from "./modelos/localidad";
export class Teatro {
  localidades: Localidad[];

  constructor() {
    this.localidades = [];
    for(let j=0; j<5; j++) { //j representa a la fila
      for(let i=0; i<10; i++) { // i representa columna
          this.localidades.push({
              columna: i,
              fila: j,
              estaOcupada: true,
              nombreReserva: undefined,
              edadReserva: undefined,
              telefonoReserva: undefined
          });        
      }
  }        
  }

  verProgramacionActual() {
    console.log("Hoy representamos La cena de los idiotas");
    console.log("En C/Sol 45, local de 300 metros, con 2 accesos");
    console.log("Precio: 30.0");
  }

  mostrarLocalidades(): void {
   
    console.log('---------------------------------------------------');
    

    let contador = 0;

    for (let j=0; j<5; j++) {

      let msg = "";

      for (let i = 0; i < 10; i++) {
        const localidad = this.localidades[contador];
        const fila = localidad.fila;
        const columna = localidad.columna;
        const ocupadoOLibre = localidad.estaOcupada 
        ? "Ocupada" 
        : "Libre";

        msg += `${fila}.${columna} ${ocupadoOLibre}`;
        contador++;
      }
      console.log(msg);
      console.log('---------------------------------------------------');
    }

  }

  mostrarLocalidadesOcupadas(): void {

    const localidadesOcupadas = this.localidades.filter( 
      localidad => localidad.estaOcupada);

      if(localidadesOcupadas.length === 0) {
        console.log('No hay localidades ocupadas');
        return;
        
      }

      for (const localidad of localidadesOcupadas) {
        console.log(`${localidad.fila}.${localidad.columna} ${localidad.nombreReserva}, tlf: ${localidad.telefonoReserva}`);
        
      }

  }
}
