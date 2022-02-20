function mostrarValoracion () {

   let valoracion = document.getElementById('valor').value;
   alert('Has valorado con ' + valoracion + ' puntos');

}

function mostrarCuenta() {

    let valorPais = document.getElementById('pais').value;
    let valorIban = document.getElementById('coniban').value;
    let valorEntidad = document.getElementById('entidad').value;
    let valorSucursal = document.getElementById('sucursal').value;
    let valorDc = document.getElementById('dc').value;
    let valorCuenta = document.getElementById('cuenta').value;
    let finalCuenta = valorPais + valorIban + '-' + valorEntidad + '-' + valorSucursal + '-' + valorDc + '-' + valorCuenta;
    alert('Le informamos que su cuenta bancaria es: ' + finalCuenta);

  }

  function mostrarDia() {

    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let valorFecha = document.getElementById('fecha').value;
    let fecha= new Date(valorFecha).getDay();
    let nombreDia = dias[fecha]
    alert('La fecha seleccionada en el elemento de fecha es un ' + nombreDia);

  }

  function comprobar() {

    let cpostal = document.getElementById('codpostal').value;
    let localidad = document.getElementById('localidad').value;

    if (
        cpostal === "" ||
        localidad === ""
      ) {
        alert("No has insertado el campo localidad o código postal. Por favor introduzca de nuevo los campos.");
        return false;
      }
      if (cpostal.length !== 5) {
        alert("El campo código postal sólo puede tener 5 números. Por favor introduzca de nuevo el código.");
        return false;
      }
      if (/^([0-9])*$/.test(localidad) || /^[A-Z]+$/i.test(cpostal)) {
        alert(
          "En el camppo código postal sólo puedes escribir números y en el campo localidad sólo puedes escribir letras. Por favor introduzca de nuevo los campos."
        );
        return false;
      }
      if (cpostal < 1000 || cpostal > 52006) {
        alert("El número introducido en el campo código postal no corresponde a un código postal español. Por favor introduzca de nuevo el código.)");
        return false;
      }
}

