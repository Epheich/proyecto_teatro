export function obtenerTipo(edad: number): string {
    if((edad >= 0) && (edad <= 12)) {
        return "INFANTIL";
    }

    else if ((edad >= 13) && (edad <= 17)) {
        return 'MENOR';
    }
    else if ((edad >= 18) && (edad <= 65)) {
        return 'MAYOR';
    }
    else if ((edad >= 65) && (edad <= 150)) {
        return 'JUBILADO';
    }
}

export function obtenerPrecioEntrada (tipo: string): number {
    const precioEntrada = 30;
    // DESCUENTO INFANTIL
    if(tipo === 'INFANTIL') {
        return precioEntrada - (precioEntrada * 0.5); 
    }
    // DESCUENTO MENOR
    if(tipo === 'MENOR') {
        return precioEntrada - (precioEntrada * 0.2); 
    }
    // DESCUENTO MAYOR
    if(tipo === 'MAYOR') {
        return precioEntrada; 
    }
    // DESCUENTO JUBILADO
    if(tipo === 'JUBILADO') {
        return precioEntrada - (precioEntrada * 0.66); 
    }
}