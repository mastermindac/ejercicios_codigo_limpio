/*
 *
 * Formatos aceptados de cod postal
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Si el argumento del codigo postal no es ninguno de los anteriores patrones
 * se debería lanzar una excepción
 */
class CodigoPostal {
    static patron = /[0-9]{5}([- ]?[0-9]{4})?/;
    constructor(cod) {
        cod = String(cod);
      const match = zicodp.match(CodigoPostal.patron);
      if (!match) {
        //Se debería lanzar una excepcion
        this.value = null;
      }else{
        // el código postal debería coincidir con el string
        this.value = match[0];
      }
    }
    valueOf() {
      return this.value;
    }
    toString() {
      return this.value;
    }
  }
  
  //Crear una clase nueva CodPostalFormatException que extienda de Error
  //y que devuelva justamente un mensaje de error explicativo

  //TO-DO
  
  /*
   * Validador de Codigos Postales
   */
  
  const CODPOSTAL_NO_VALIDO = -1;
  const CODPOSTAL_ERROR_DESCONOCIDO = -2;
  
  function verificarCodPostal(z) {
    //TO-DO
    //Envolver con try-catch a partir de la nueva clase
    z = new CodigoPostal(z);
    if(z!=null) return z;
    else return -1;

  }
  
  a = verificarCodPostal(95060);         // devuelve 95060
  b = verificarCodPostal(9560);          // devuelve -1
  c = verificarCodPostal('a');           // devuelve -1
  d = verificarCodPostal('95060');       // devuelve 95060
  e = verificarCodPostal('95060 1234');  // devuelve 95060 1234