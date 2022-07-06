import { Localidad } from "./modelos/localidad";
import { obtenerPrecioEntrada, obtenerTipo } from "./utilidades";
export class Teatro {
  localidades: Localidad[];

  constructor() {
    this.localidades = [];
    for (let j = 0; j < 5; j++) {
      //j representa a la fila
      for (let i = 0; i < 10; i++) {
        // i representa columna
        this.localidades.push({
          columna: i,
          fila: j,
          estaOcupada: false,
          nombreReserva: undefined,
          edadReserva: undefined,
          telefonoReserva: undefined,
        });
      }
    }
  }
  // opcion 1
  verProgramacionActual() {
    console.log("Hoy representamos La cena de los idiotas");
    console.log("En C/Sol 45, local de 300 metros, con 2 accesos");
    console.log("Precio: 30.0");
  }
  // opcion 2
  mostrarLocalidades(): void {
    console.log("---------------------------------------------------");

    let contador = 0;

    for (let j = 0; j < 5; j++) {
      let msg = "";

      for (let i = 0; i < 10; i++) {
        const localidad = this.localidades[contador];
        const fila = localidad.fila;
        const columna = localidad.columna;
        const ocupadoOLibre = localidad.estaOcupada ? "Ocupada" : "Libre";

        msg += `${fila}.${columna} ${ocupadoOLibre}`;
        contador++;
      }
      console.log(msg);
      console.log("---------------------------------------------------");
    }
  }
  // opcion 3
  mostrarLocalidadesOcupadas(): void {
    const localidadesOcupadas = this.localidades.filter(
      (localidad) => localidad.estaOcupada
    );

    if (localidadesOcupadas.length === 0) {
      console.log("No hay localidades ocupadas");
      return;
    }

    for (const localidad of localidadesOcupadas) {
      const tipo = obtenerTipo(localidad.edadReserva);

      console.log(
        `${localidad.fila}.${localidad.columna} ${localidad.nombreReserva}, tlf: ${localidad.telefonoReserva}, Tipo: ${tipo}`
      );
    }
  }
  // opcion 4
  async venderLocalidad(rlp) {

    const fila: string = await rlp.questionAsync('¿En qué fila quieres sentarte (0-4)?\n');
    const columna: string = await rlp.questionAsync('¿Y en que butaca (0-9)?\n');
    const nombre: string = await rlp.questionAsync('¿Cómo se llama?\n');
    const telefono: string = await rlp.questionAsync('¿Cual es su numero de teléfono?\n');
    const edad: string = await rlp.questionAsync('¿Qué edad tienes (0-120)?\n');
    
    
    const filaNumero = Number(fila);
    if ((filaNumero < 0) || (filaNumero > 4)) {
      console.log('No existe la fila');
      return;      
    }
    
    const columnaNumero = +columna;
    if ((columnaNumero < 0) || ( columnaNumero > 9)) {
      console.log('No existe la butaca');
      return;      
    }
    
    if(nombre.length < 3) {
      console.log('Introduce al menos 3 caracteres');
      return;
    }
    const telefonoNumero = +telefono;
    if(isNaN(telefonoNumero)) {
      console.log('El teléfono no es un numero');
      return;    
    }
    if(telefono.length !== 9) {
      console.log('El teléfono no es valido');
      return
    }
    const edadNumero = +edad;
    if((edadNumero < 0)||(edadNumero > 120)) {
      console.log('Edad Incorrecta');
      return; 
    }

    const localidadAReservar = this.localidades.find(
      localidad => ((localidad.fila === filaNumero) && (localidad.columna === columnaNumero))
    )
    if (localidadAReservar.estaOcupada) {
      console.log('Localidad no esta disponible');
      return; 
    }

    localidadAReservar.estaOcupada = true;
    localidadAReservar.nombreReserva = nombre;
    localidadAReservar.telefonoReserva = telefonoNumero;
    localidadAReservar.edadReserva = edadNumero;
    
    const tipo = obtenerTipo(edadNumero);
    const precioEntrada = obtenerPrecioEntrada(tipo);
   
    
    console.log(`Se ha vendido la localidad ${fila}.${columna} a ${nombre} por ${precioEntrada} €`);  
  }
}