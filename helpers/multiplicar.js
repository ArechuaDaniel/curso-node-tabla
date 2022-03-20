const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (numero = 5, listar = false, hasta) => {
    try{
    
    let salida ='';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
        
        salida += `${numero} x  ${i} = ${numero * i}\n`;
        consola += `${numero} ${'x' .red}  ${i} ${'=' .red} ${numero * i}\n`;
    }
    if (listar) {
        console.log('==================');
        console.log(`   Tabla del: ${numero} `.green);
        console.log('==================');
        console.log(consola)
    }

    

    const nombreArchivo= fs.writeFileSync( `./salida/tabla-${numero}.txt`, salida);

    return `tabla-${numero}.txt`;

    } catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo
}