function s(evt) {
    var l, i, sw, b, debeSw, d, swC = 0;
    l = document.getElementById("id01");
    sw = true;
    //Define la dección de la ordenación, ascendente, descendente 
    d = evt.currentTarget.ord; //asc o desc
    //Bucle hasta que finalice la ordenación
    while (sw) {
      // por defecto el switching se coloca a false
      sw = false;
      b = l.getElementsByTagName("LI");
      //Recorremos todos los items
      for (i = 0; i < (b.length - 1); i++) {
        // Por defecto no se debe cambiar
        debeSw = false;
        // Basados en la direccion asc o desc decidimos realizar la ordenación
        if (d == "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            //Comprobación alfabética
            debeSw= true;
            break;
          }
        } else if (d == "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            ///Comprobación alfabética
            debeSw= true;
            break;
          }
        }
      }
      if (debeSw) {
        // Realizamos el cambio del elemento marcado
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        sw = true;
        // Cada vez que se haya realizado un cambio aumentamos el contador
        swC ++;
      } else {
        /*If no sw has been done AND the dection is "asc",
        set the dection to "desc" and run the while loop again.*/
        //Si no se ha realizado un switch y la detección es ASC, se realiza la detección DESC
        if (swC == 0 && d == "asc") {
          d = "desc";
          sw = true;
        }
      }
    }
  }
  
  var sortBtn = document.getElementById("sortBtn");
  sortBtn.addEventListener("click", s, false );
  sortBtn.ord = 'asc';